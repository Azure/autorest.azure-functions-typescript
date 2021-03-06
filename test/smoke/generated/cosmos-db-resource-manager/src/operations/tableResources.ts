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
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  TableResourcesListTablesResponse,
  TableResourcesGetTableResponse,
  TableCreateUpdateParameters,
  TableResourcesCreateUpdateTableResponse,
  TableResourcesGetTableThroughputResponse,
  ThroughputSettingsUpdateParameters,
  TableResourcesUpdateTableThroughputResponse
} from "../models";

/**
 * Class representing a TableResources.
 */
export class TableResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class TableResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listTables(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TableResourcesListTablesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options: operationOptions },
      listTablesOperationSpec
    ) as Promise<TableResourcesListTablesResponse>;
  }

  /**
   * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TableResourcesGetTableResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options: operationOptions },
      getTableOperationSpec
    ) as Promise<TableResourcesGetTableResponse>;
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  async createUpdateTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<TableResourcesCreateUpdateTableResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      tableName,
      createUpdateTableParameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        TableResourcesCreateUpdateTableResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createUpdateTableOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createUpdateTableOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async deleteTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      tableName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteTableOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteTableOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TableResourcesGetTableThroughputResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options: operationOptions },
      getTableThroughputOperationSpec
    ) as Promise<TableResourcesGetTableThroughputResponse>;
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  async updateTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<TableResourcesUpdateTableThroughputResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      tableName,
      updateThroughputParameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        TableResourcesUpdateTableThroughputResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      updateTableThroughputOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: updateTableThroughputOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listTablesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  serializer
};
const getTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  serializer
};
const createUpdateTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    },
    201: {
      bodyMapper: Mappers.TableGetResults
    },
    202: {
      bodyMapper: Mappers.TableGetResults
    },
    204: {
      bodyMapper: Mappers.TableGetResults
    }
  },
  requestBody: Parameters.createUpdateTableParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  serializer
};
const getTableThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  serializer
};
const updateTableThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
