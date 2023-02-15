# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, Field, validator  # noqa: F401
from connector_builder.generated.models.any_of_interpolated_stringnumberstring import AnyOfInterpolatedStringnumberstring


class ConstantBackoffStrategyAllOf(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    ConstantBackoffStrategyAllOf - a model defined in OpenAPI

        backoff_time_in_seconds: The backoff_time_in_seconds of this ConstantBackoffStrategyAllOf.
        config: The config of this ConstantBackoffStrategyAllOf.
    """

    backoff_time_in_seconds: AnyOfInterpolatedStringnumberstring = Field(alias="backoff_time_in_seconds")
    config: Dict[str, Any] = Field(alias="config")

ConstantBackoffStrategyAllOf.update_forward_refs()