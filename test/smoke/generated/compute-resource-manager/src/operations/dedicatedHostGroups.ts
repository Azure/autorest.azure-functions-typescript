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
import { ComputeManagementClient } from "../computeManagementClient";
import {
  DedicatedHostGroup,
  DedicatedHostGroupsCreateOrUpdateResponse,
  DedicatedHostGroupUpdate,
  DedicatedHostGroupsUpdateResponse,
  DedicatedHostGroupsGetResponse,
  DedicatedHostGroupsListByResourceGroupResponse,
  DedicatedHostGroupsListBySubscriptionResponse,
  DedicatedHostGroupsListByResourceGroupNextResponse,
  DedicatedHostGroupsListBySubscriptionNextResponse
} from "../models";

/**
 * Class representing a DedicatedHostGroups.
 */
export class DedicatedHostGroups {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class DedicatedHostGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups
   * please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Create Dedicated Host Group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroup,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostGroupName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<DedicatedHostGroupsCreateOrUpdateResponse>;
  }

  /**
   * Update an dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Update Dedicated Host Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroupUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostGroupName,
        parameters,
        options: operationOptions
      },
      updateOperationSpec
    ) as Promise<DedicatedHostGroupsUpdateResponse>;
  }

  /**
   * Delete a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Retrieves information about a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, options: operationOptions },
      getOperationSpec
    ) as Promise<DedicatedHostGroupsGetResponse>;
  }

  /**
   * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
   * the response to get the next page of dedicated host groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<DedicatedHostGroupsListByResourceGroupResponse>;
  }

  /**
   * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
   * response to get the next page of dedicated host groups.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsListBySubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBySubscriptionOperationSpec
    ) as Promise<DedicatedHostGroupsListBySubscriptionResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<DedicatedHostGroupsListByResourceGroupNextResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  listBySubscriptionNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsListBySubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBySubscriptionNextOperationSpec
    ) as Promise<DedicatedHostGroupsListBySubscriptionNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    },
    201: {
      bodyMapper: Mappers.DedicatedHostGroup
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
