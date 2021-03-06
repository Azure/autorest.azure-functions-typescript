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
  ServiceObjectivesGetResponse,
  ServiceObjectivesListByServerResponse
} from "../models";

/**
 * Class representing a ServiceObjectives.
 */
export class ServiceObjectives {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServiceObjectives class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a database service objective.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param serviceObjectiveName The name of the service objective to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    serviceObjectiveName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServiceObjectivesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        serviceObjectiveName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ServiceObjectivesGetResponse>;
  }

  /**
   * Returns database service objectives.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServiceObjectivesListByServerResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options: operationOptions },
      listByServerOperationSpec
    ) as Promise<ServiceObjectivesListByServerResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/serviceObjectives/{serviceObjectiveName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceObjective
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.serviceObjectiveName
  ],
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/serviceObjectives",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceObjectiveListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  serializer
};
