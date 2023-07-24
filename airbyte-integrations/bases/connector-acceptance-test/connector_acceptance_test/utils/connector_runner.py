#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import json
import logging
import os
from pathlib import Path
from typing import List, Mapping, Optional

import dagger
from airbyte_protocol.models import AirbyteMessage, ConfiguredAirbyteCatalog, OrchestratorType
from airbyte_protocol.models import Type as AirbyteMessageType
from connector_acceptance_test.utils import SecretDict
from pydantic import ValidationError


class ConnectorRunner:
    def __init__(
        self,
        image_name: str,
        base_path: Path,
        dagger_client: dagger.Client,
        connector_configuration_path: Optional[Path] = None,
        custom_environment_variables: Optional[Mapping] = {},
    ):
        self.base_path = base_path
        self.image_name = image_name
        self.dagger_client = dagger_client
        self._runs = 0
        self._connector_configuration_path = connector_configuration_path
        self._custom_environment_variables = custom_environment_variables

    async def call_spec(self, raise_container_error=False) -> List[AirbyteMessage]:
        return await self._run(["spec"], raise_container_error)

    async def call_check(self, config: SecretDict, raise_container_error: bool = False) -> List[AirbyteMessage]:
        return await self._run(["check", "--config", "/data/tap_config.json"], raise_container_error, config=config)

    async def call_discover(self, config: SecretDict, raise_container_error: bool = False) -> List[AirbyteMessage]:
        return await self._run(["discover", "--config", "/data/tap_config.json"], raise_container_error, config=config)

    async def call_read(
        self, config: SecretDict, catalog: ConfiguredAirbyteCatalog, raise_container_error: bool = False
    ) -> List[AirbyteMessage]:
        return await self._run(
            ["read", "--config", "/data/tap_config.json", "--catalog", "/data/catalog.json"],
            raise_container_error,
            config=config,
            catalog=catalog,
        )

    async def call_read_with_state(
        self, config: SecretDict, catalog: ConfiguredAirbyteCatalog, state: dict, raise_container_error: bool = False
    ) -> List[AirbyteMessage]:
        return await self._run(
            ["read", "--config", "/data/tap_config.json", "--catalog", "/data/catalog.json", "--state", "/data/state.json"],
            raise_container_error,
            config=config,
            catalog=catalog,
            state=state,
        )

    async def get_container_env_variable(self, name: str):
        return await self._get_connector_container(self.dagger_client).env_variable(name)

    async def get_container_label(self, label: str):
        return await self._get_connector_container(self.dagger_client).label(label)

    async def get_container_entrypoint(self):
        entrypoint = await self._get_connector_container(self.dagger_client).entrypoint()
        return " ".join(entrypoint)

    def _get_connector_container(self, dagger_client) -> dagger.Container:
        if Path("/cat/container_under_test.tar").exists():
            container_under_test_tar_file = (
                dagger_client.host().directory("/cat", include="container_under_test.tar").file("container_under_test.tar")
            )
            container = dagger_client.container().import_(container_under_test_tar_file)
        else:
            container = dagger_client.container().from_(self.image_name)
        # # # airbyte-ci might pass a cachebuster env var to force rebuild of the container image
        # We pass this env var to the container to ensure the cache is busted
        if os.environ.get("CACHEBUSTER"):
            container = container.with_env_variable("CACHEBUSTER", os.environ["CACHEBUSTER"])
        self._connector_under_test_container = container
        return self._connector_under_test_container

    async def _run(
        self, airbyte_command: List[str], raise_container_error: bool, config=None, catalog=None, state=None
    ) -> List[AirbyteMessage]:
        container = self._get_connector_container(self.dagger_client)
        if config:
            container = container.with_new_file("/data/tap_config.json", json.dumps(dict(config)))
        if state:
            container = container.with_new_file("/data/state.json", json.dumps(state))
        if catalog:
            container = container.with_new_file("/data/catalog.json", catalog.json())
        for key, value in self._custom_environment_variables.items():
            container = container.with_env_variable(key, str(value))
        try:
            container = container.with_exec(airbyte_command)
            output = await container.stdout()
        except dagger.QueryError as e:
            if raise_container_error:
                raise e
            else:
                if isinstance(e, dagger.ExecError):
                    output = e.stdout + e.stderr
                else:
                    output = str(e)
        return self.parse_airbyte_messages_from_command_output(output)

    def parse_airbyte_messages_from_command_output(self, command_output: str) -> List[AirbyteMessage]:
        airbyte_messages = []
        for line in command_output.splitlines():
            try:
                airbyte_message = AirbyteMessage.parse_raw(line)
                if airbyte_message.type is AirbyteMessageType.CONTROL and airbyte_message.control.type is OrchestratorType.CONNECTOR_CONFIG:
                    self._persist_new_configuration(airbyte_message.control.connectorConfig.config, int(airbyte_message.control.emitted_at))
                airbyte_messages.append(airbyte_message)
            except ValidationError as exc:
                logging.warning("Unable to parse connector's output %s, error: %s", line, exc)
        return airbyte_messages

    def _persist_new_configuration(self, new_configuration: dict, configuration_emitted_at: int) -> Optional[Path]:
        """Store new configuration values to an updated_configurations subdir under the original configuration path.
        N.B. The new configuration will not be stored if no configuration path was passed to the ConnectorRunner.
        Args:
            new_configuration (dict): The updated configuration
            configuration_emitted_at (int): Timestamp at which the configuration was emitted (ms)

        Returns:
            Optional[Path]: The updated configuration path if it was persisted.
        """
        if self._connector_configuration_path is None:
            logging.warning("No configuration path was passed to the ConnectorRunner. The new configuration was not persisted")
            return None

        with open(self._connector_configuration_path) as old_configuration_file:
            old_configuration = json.load(old_configuration_file)

        if new_configuration != old_configuration:
            file_prefix = self._connector_configuration_path.stem.split("|")[0]
            if "/updated_configurations/" not in str(self._connector_configuration_path):
                Path(self._connector_configuration_path.parent / "updated_configurations").mkdir(exist_ok=True)
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/updated_configurations/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )
            else:
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )

            with open(new_configuration_file_path, "w") as new_configuration_file:
                json.dump(new_configuration, new_configuration_file)
            logging.info(f"Stored most recent configuration value to {new_configuration_file_path}")
            return new_configuration_file_path
