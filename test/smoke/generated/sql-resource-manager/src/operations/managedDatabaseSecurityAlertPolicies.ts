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
  SecurityAlertPolicyName,
  ManagedDatabaseSecurityAlertPoliciesGetResponse,
  ManagedDatabaseSecurityAlertPolicy,
  ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse
} from "../models";

/**
 * Class representing a ManagedDatabaseSecurityAlertPolicies.
 */
export class ManagedDatabaseSecurityAlertPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a managed database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSecurityAlertPoliciesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        securityAlertPolicyName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ManagedDatabaseSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The database security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: ManagedDatabaseSecurityAlertPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        securityAlertPolicyName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets a list of managed database's security alert policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options: operationOptions
      },
      listByDatabaseOperationSpec
    ) as Promise<ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse>;
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options: operationOptions
      },
      listByDatabaseNextOperationSpec
    ) as Promise<
      ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse
    >;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName,
    Parameters.managedInstanceName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters45,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  serializer
};
const listByDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  serializer
};