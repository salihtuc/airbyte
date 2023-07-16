#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import AirbyteEntrypoint, launch
from airbyte_cdk.sources.file_based.file_based_source import FileBasedSource
from source_s3.v4 import S3FileBasedSourceConfig, SourceS3StreamReader


if __name__ == "__main__":
    # args = sys.argv[1:]
    args = ['read', '--config', 'secrets/config.json', '--catalog', 'integration_tests/configured_catalogs/csv.json']
    catalog_path = AirbyteEntrypoint.extract_catalog(args)
    source = FileBasedSource(SourceS3StreamReader(), S3FileBasedSourceConfig, catalog_path)
    # launch(source, args)
    launch(source, ['read', '--config', 'secrets/v4_config.json', '--catalog', 'integration_tests/configured_catalogs/csv.json'])
