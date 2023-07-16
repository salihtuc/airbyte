#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import logging
from contextlib import contextmanager
from io import IOBase
from typing import Any, Dict, Iterable, List, Optional, Set

import boto3.session
import smart_open
from botocore.client import BaseClient, Config
from airbyte_cdk.sources.file_based.exceptions import ErrorListingFiles, FileBasedSourceError
from airbyte_cdk.sources.file_based.file_based_stream_reader import AbstractFileBasedStreamReader
from airbyte_cdk.sources.file_based.remote_file import RemoteFile
from source_s3.v4.s3_file_based_source_config import S3FileBasedSourceConfig


class SourceS3StreamReader(AbstractFileBasedStreamReader):

    def __init__(self):
        super().__init__()
        self._s3_client = None

    @property
    def config(self) -> S3FileBasedSourceConfig:
        return self._config

    @config.setter
    def config(self, value: S3FileBasedSourceConfig):
        assert isinstance(value, S3FileBasedSourceConfig)
        self._config = value

    @property
    def s3_client(self) -> BaseClient:
        if self.config is None:
            # We shouldn't hit this; config should always get set before attempting to
            # list or read files.
            raise ValueError("Source config is missing; cannot create the S3 client.")
        if self._s3_client is None:
            if self.config.endpoint:
                client_kv_args = _get_s3_compatible_client_args(self.config)
                self._s3_client = boto3.client('s3', **client_kv_args)
            else:
                self._s3_client = boto3.client(
                    's3',
                    aws_access_key_id=self.config.aws_access_key_id,
                    aws_secret_access_key=self.config.aws_secret_access_key,
                )
        return self._s3_client

    def get_matching_files(self, globs: List[str], logger: logging.Logger) -> Iterable[RemoteFile]:
        """
        Get all files matching the specified glob patterns.
        """
        # max_keys = 1000
        # response_contents = [{'Key': 'aws-demo-michel/michel_demo_charges/2022_02_14_1644816688386_0.jsonl', 'LastModified': datetime.datetime(2022, 2, 14, 5, 31, 31, tzinfo=tzutc()), 'ETag': '"d91d81f43d6ed8b82ee72096b125bc64-1"', 'Size': 2444780, 'StorageClass': 'STANDARD'}, {'Key': 'big_files/200M.csv', 'LastModified': datetime.datetime(2021, 11, 22, 23, 45, 18, tzinfo=tzutc()), 'ETag': '"cebd90b251b104b04a2205c6d86b5c90"', 'Size': 221794272, 'StorageClass': 'STANDARD'}, {'Key': 'data.json', 'LastModified': datetime.datetime(2021, 12, 28, 0, 1, 1, tzinfo=tzutc()), 'ETag': '"10b1885a9ebba3be19f67af3dac97ab9"', 'Size': 6712, 'StorageClass': 'STANDARD'}, {'Key': 'demo-aws/miche_charges/2021_10_08_1633664223412_0.jsonl', 'LastModified': datetime.datetime(2021, 10, 8, 3, 37, 5, tzinfo=tzutc()), 'ETag': '"10215956319acfc2bb74c9c335354cf5-1"', 'Size': 2052, 'StorageClass': 'STANDARD'}, {'Key': 'epidemiology.jsonl', 'LastModified': datetime.datetime(2021, 12, 28, 19, 2, 40, tzinfo=tzutc()), 'ETag': '"db4eea952fdb53edd631df47a209dcb3"', 'Size': 3734647, 'StorageClass': 'STANDARD'}, {'Key': 'index.csv.gz', 'LastModified': datetime.datetime(2022, 2, 24, 20, 28, 17, tzinfo=tzutc()), 'ETag': '"5ad3fe527b9535408ce5c3a3d5b9f1db-45"', 'Size': 767466786, 'StorageClass': 'STANDARD'}, {'Key': 'redshift_dest_test.jsonl', 'LastModified': datetime.datetime(2022, 5, 26, 9, 8, 14, tzinfo=tzutc()), 'ETag': '"3f94e0d3a6f4421858f755671623d680"', 'Size': 2705272, 'StorageClass': 'STANDARD'}, {'Key': 'redshift_result.csv', 'LastModified': datetime.datetime(2022, 5, 26, 9, 17, 47, tzinfo=tzutc()), 'ETag': '"bf83b332995904b4222e293ff5e9bc79"', 'Size': 515644, 'StorageClass': 'STANDARD'}, {'Key': 'redshift_result_2.csv', 'LastModified': datetime.datetime(2022, 5, 26, 9, 55, 16, tzinfo=tzutc()), 'ETag': '"bf83b332995904b4222e293ff5e9bc79"', 'Size': 515644, 'StorageClass': 'STANDARD'}, {'Key': 'redshift_result_3.csv', 'LastModified': datetime.datetime(2022, 5, 26, 9, 55, 15, tzinfo=tzutc()), 'ETag': '"bf83b332995904b4222e293ff5e9bc79"', 'Size': 515644, 'StorageClass': 'STANDARD'}, {'Key': 'sample_synth_4K_150.___', 'LastModified': datetime.datetime(2021, 12, 29, 11, 15, 16, tzinfo=tzutc()), 'ETag': '"aab25ce36f47a0a0c0429d8d9ee3907b"', 'Size': 3711578, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test.csv', 'LastModified': datetime.datetime(2021, 7, 25, 15, 33, 4, tzinfo=tzutc()), 'ETag': '"129da76b0763cf375edbb69fc62af884"', 'Size': 147, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test.json', 'LastModified': datetime.datetime(2022, 7, 15, 9, 57, 15, tzinfo=tzutc()), 'ETag': '"105c615643591d2661a886b60a79c1ee"', 'Size': 1433, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test.jsonl', 'LastModified': datetime.datetime(2022, 7, 15, 8, 31, 2, tzinfo=tzutc()), 'ETag': '"70476042b67df9305bd5fe7de4d75a02"', 'Size': 180, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test.parquet', 'LastModified': datetime.datetime(2021, 8, 30, 15, 46, 17, tzinfo=tzutc()), 'ETag': '"9e6ac8a28c9f311f21e429a726ebacf0"', 'Size': 3349, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test_2.csv', 'LastModified': datetime.datetime(2021, 12, 20, 12, 35, 5, tzinfo=tzutc()), 'ETag': '"129da76b0763cf375edbb69fc62af884"', 'Size': 147, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test_multilines.jsonl', 'LastModified': datetime.datetime(2022, 7, 15, 10, 1, 27, tzinfo=tzutc()), 'ETag': '"a51db48dcb454c40f70cb0052155fe13"', 'Size': 236, 'StorageClass': 'STANDARD'}, {'Key': 'simple_test_newlines.jsonl', 'LastModified': datetime.datetime(2022, 7, 15, 10, 7, tzinfo=tzutc()), 'ETag': '"a51db48dcb454c40f70cb0052155fe13"', 'Size': 236, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 24, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 26, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ACTIVE/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 27, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Annum/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 27, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Annum/4e0ea65c5a074c0592e43f7b950f3ce8-0.parquet', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 29, tzinfo=tzutc()), 'ETag': '"23c2e2e894cf396ae3a99f5a341334cf"', 'Size': 10889, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Hour/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 27, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Hour/4e0ea65c5a074c0592e43f7b950f3ce8-0.parquet', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 29, tzinfo=tzutc()), 'ETag': '"0a7f33b94e4aa98392c3f405ab089df1"', 'Size': 10587, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ON%20LEAVE/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 26, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ON%20LEAVE/Pay_Basis=per%20Annum/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 27, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2021/Leave_Status_as_of_June_30=ON%20LEAVE/Pay_Basis=per%20Annum/4e0ea65c5a074c0592e43f7b950f3ce8-0.parquet', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 28, tzinfo=tzutc()), 'ETag': '"a3b2eb18f5b165c1a766f49132861941"', 'Size': 10822, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 25, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ACTIVE/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 26, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Annum/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 26, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ACTIVE/Pay_Basis=per%20Annum/4e0ea65c5a074c0592e43f7b950f3ce8-0.parquet', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 29, tzinfo=tzutc()), 'ETag': '"a87ffa9aa7254b85b7b9b386a78c5307"', 'Size': 11026, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ON%20LEAVE/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 25, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ON%20LEAVE/Pay_Basis=per%20Annum/', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 26, tzinfo=tzutc()), 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'Size': 0, 'StorageClass': 'STANDARD'}, {'Key': 'test_payroll/Fiscal_Year=2022/Leave_Status_as_of_June_30=ON%20LEAVE/Pay_Basis=per%20Annum/4e0ea65c5a074c0592e43f7b950f3ce8-0.parquet', 'LastModified': datetime.datetime(2023, 5, 9, 20, 16, 28, tzinfo=tzutc()), 'ETag': '"077ad20d89b10f9e0f2e437ec9564565"', 'Size': 10764, 'StorageClass': 'STANDARD'}, {'Key': 'test_sample.avro', 'LastModified': datetime.datetime(2022, 5, 11, 11, 54, 11, tzinfo=tzutc()), 'ETag': '"9a438954290227b9b6a02f766ab63335"', 'Size': 508, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/group_memberships/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 21, tzinfo=tzutc()), 'ETag': '"45aae4f392865aba2742c19abd91123d-1"', 'Size': 1001, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/group_memberships/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 37, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/groups/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 21, tzinfo=tzutc()), 'ETag': '"381db93e878ae6fede1321a9e9c2b292-1"', 'Size': 693, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/groups/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 37, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/macros/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 21, tzinfo=tzutc()), 'ETag': '"4525050f9187d5cfc4a142115991fd14-1"', 'Size': 1266, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/macros/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 37, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/organizations/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"559685324291b3bd1cf59a2621d1f7f4-1"', 'Size': 989, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/organizations/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 37, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/satisfaction_ratings/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"ea304606682214fad22aed66a865006f-1"', 'Size': 836, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/satisfaction_ratings/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"645baa77c4db92fa68f27572f7d0930e-1"', 'Size': 836, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/sla_policies/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"c69f257a7187b04dda79dcb47e74652e-1"', 'Size': 1137, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/sla_policies/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"43ba5fbcefcbacebee7648d90a947976-1"', 'Size': 1137, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/tags/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"2aad4879d03467b288e07b29634b9e33-1"', 'Size': 327, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/tags/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"6e8253a0bb63027d52faf38f3d271d0b-1"', 'Size': 327, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_audits/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"5af5914ed98aeca667553cd073ff80b1-1"', 'Size': 47653, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_audits/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_comments/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"5154f7d7c5f735220f410ced5ec67f9b-1"', 'Size': 23637, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_comments/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_fields/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"9847143322a54d815fc3204075e105c2-1"', 'Size': 5803, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_fields/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_forms/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 22, tzinfo=tzutc()), 'ETag': '"65b7474b980d77409d67fe5a2dff926a-1"', 'Size': 744, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_forms/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_metrics/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 23, tzinfo=tzutc()), 'ETag': '"dea68a8c5543052da0634b4baa15fcc9-1"', 'Size': 10281, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/ticket_metrics/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 38, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/tickets/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 23, tzinfo=tzutc()), 'ETag': '"1594a1996680a87efa78dd46ab9f6e29-1"', 'Size': 13505, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/tickets/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 39, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/users/2021_09_01_1630491920181_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 25, 23, tzinfo=tzutc()), 'ETag': '"4c92a3a40ccc36c43ad907be4a4c05f5-1"', 'Size': 7057, 'StorageClass': 'STANDARD'}, {'Key': 'zendesk_test/users/2021_09_01_1630491995863_0.csv', 'LastModified': datetime.datetime(2021, 9, 1, 10, 26, 39, tzinfo=tzutc()), 'ETag': '"d1b88481481173119219e50267b313e6-1"', 'Size': 56, 'StorageClass': 'STANDARD'}]
        # key_count = 64
        # response = {
        #     "Contents": response_contents,
        #     "KeyCount": key_count,
        #     "IsTruncated": False,
        #     "MaxKeys": max_keys,
        # }
        s3 = self.s3_client
        prefixes = self.get_prefixes_from_globs(globs)
        seen = set()
        total_n_keys = 0

        try:
            kwargs = {"Bucket": self.config.bucket}
            if prefixes:
                for prefix in prefixes:
                    for remote_file in self._page(s3, globs, kwargs, prefix, seen, logger):
                        yield remote_file
            else:
                total_n_keys += 1
                for remote_file in self._page(s3, globs, kwargs, None, seen, logger):
                    yield remote_file

            logger.info(f"Finished listing objects from S3. Found {total_n_keys} objects total ({len(seen)} unique objects).")
        except Exception as exc:
            raise ErrorListingFiles(
                FileBasedSourceError.ERROR_LISTING_FILES,
                source="s3",
                bucket=self.config.bucket,
                globs=globs,
                endpoint=self.config.endpoint,
            ) from exc

    def _page(self, s3: BaseClient, globs: List[str], kwargs: Dict[str, Any], prefix: Optional[str], seen: Set[str], logger: logging.Logger) -> Iterable[RemoteFile]:
        """
        Page through lists of S3 objects.
        """
        total_n_keys_for_prefix = 0
        while True:
            response = s3.list_objects_v2(**kwargs, Prefix=prefix) if prefix else s3.list_objects_v2(**kwargs)
            key_count = response.get("KeyCount")
            total_n_keys_for_prefix += key_count
            logger.info(f"Received {key_count} objects from S3 for prefix '{prefix}'.")

            if "Contents" in response:
                for file in response["Contents"]:
                    remote_file = RemoteFile(uri=file["Key"], last_modified=file["LastModified"])
                    if self.file_matches_globs(remote_file, globs) and remote_file.uri not in seen:
                        seen.add(remote_file.uri)
                        yield remote_file
            else:
                logger.warning(f"Invalid response from S3; missing 'Contents' key. kwargs={kwargs}.")

            if next_token := response.get("NextContinuationToken"):
                kwargs["ContinuationToken"] = next_token
            else:
                logger.info(f"Finished listing objects from S3 for prefix={prefix}. Found {total_n_keys_for_prefix} objects.")
                break

    @contextmanager
    def open_file(self, file: RemoteFile, logger: logging.Logger) -> IOBase:
        try:
            params = {"client": self.s3_client}
        except Exception as exc:
            raise exc

        logger.debug(f"try to open {file.uri}")
        try:
            result = smart_open.open(f"s3://{self.config.bucket}/{file.uri}", transport_params=params, mode="r")
        except OSError:
            logger.warning(
                f"We don't have access to {file.uri}. The file appears to have become unreachable during sync."
                f"Check whether key {file.uri} exists in `{self.config.bucket}` bucket and/or has proper ACL permissions"
            )
        # see https://docs.python.org/3/library/contextlib.html#contextlib.contextmanager for why we do this
        try:
            yield result
        finally:
            result.close()


# Used to specify anonymous (unsigned) request signature
class UNSIGNED:
    def __copy__(self):
        return self

    def __deepcopy__(self, memodict):
        return self


def _get_s3_compatible_client_args(config: S3FileBasedSourceConfig) -> dict:
    """
    Returns map of args used for creating s3 boto3 client.
    """
    client_config = Config(signature_version=UNSIGNED())
    client_kv_args = {"config": client_config}
    client_kv_args.update({
        "endpoint_url": config.endpoint,
        "use_ssl": True,
        "verify": True,
        "config": Config(s3={"addressing_style": "auto"}),
    })
    return client_kv_args
