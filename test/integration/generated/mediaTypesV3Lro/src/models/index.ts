/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * Optional parameters.
 */
export interface MediaTypesV3LROClientSendOnDefault$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Excluded Ids
   */
  excluded?: string[];
}

/**
 * Optional parameters.
 */
export interface MediaTypesV3LROClientSendOnDefault$textOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Excluded Ids
   */
  excluded?: string[];
}

/**
 * Optional parameters.
 */
export interface MediaTypesV3LROClientSend$binaryOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Excluded Ids
   */
  excluded?: string[];
}

/**
 * Optional parameters.
 */
export interface MediaTypesV3LROClientSend$textOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Excluded Ids
   */
  excluded?: string[];
}

/**
 * Optional parameters.
 */
export interface MediaTypesV3LROClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
