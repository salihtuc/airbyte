#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import Optional

from airbyte_cdk.sources.file_based.config.abstract_file_based_spec import AbstractFileBasedSpec
from pydantic import AnyUrl, Field


class S3FileBasedSourceConfig(AbstractFileBasedSpec):

    @classmethod
    def documentation_url(cls) -> AnyUrl:
        return AnyUrl("https://docs.airbyte.com/integrations/sources/s3", scheme="https")

    bucket: str = Field(description="Name of the S3 bucket where the file(s) exist.", order=0)

    aws_access_key_id: Optional[str] = Field(
        title="AWS Access Key ID",
        default=None,
        description="In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper "
        "permissions. If accessing publicly available data, this field is not necessary.",
        airbyte_secret=True,
        order=1,
    )

    aws_secret_access_key: Optional[str] = Field(
        title="AWS Secret Access Key",
        default=None,
        description="In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper "
        "permissions. If accessing publicly available data, this field is not necessary.",
        airbyte_secret=True,
        order=2,
    )

    endpoint: Optional[str] = Field("", description="Endpoint to an S3 compatible service. Leave empty to use AWS.", order=4)
