/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * Optional parameters.
 */
export interface PathsGetEmptyOptionalParams extends coreHttp.OperationOptions {
  /**
   * The key version. Default value 'v1'.
   */
  keyVersion?: string;
}

/**
 * Optional parameters.
 */
export interface CustomUrlMoreOptionsClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * A string value that is used as a global part of the parameterized host. Default value 'host'.
   */
  dnsSuffix?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
