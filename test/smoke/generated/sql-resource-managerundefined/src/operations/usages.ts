/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  UsagesListByInstancePoolOptionalParams,
  UsagesListByInstancePoolResponse,
  UsagesListByInstancePoolNextOptionalParams,
  UsagesListByInstancePoolNextResponse
} from "../models";

/**
 * Class representing a Usages.
 */
export class Usages {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all instance pool usage metrics
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams
  ): Promise<UsagesListByInstancePoolResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, options: operationOptions },
      listByInstancePoolOperationSpec
    ) as Promise<UsagesListByInstancePoolResponse>;
  }

  /**
   * ListByInstancePoolNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param nextLink The nextLink from the previous successful call to the ListByInstancePool method.
   * @param options The options parameters.
   */
  listByInstancePoolNext(
    resourceGroupName: string,
    instancePoolName: string,
    nextLink: string,
    options?: UsagesListByInstancePoolNextOptionalParams
  ): Promise<UsagesListByInstancePoolNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        instancePoolName,
        nextLink,
        options: operationOptions
      },
      listByInstancePoolNextOperationSpec
    ) as Promise<UsagesListByInstancePoolNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByInstancePoolOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.expandChildren],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  serializer
};
const listByInstancePoolNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.expandChildren],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName,
    Parameters.nextLink24
  ],
  serializer
};
