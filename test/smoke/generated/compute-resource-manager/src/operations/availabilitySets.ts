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
  AvailabilitySet,
  AvailabilitySetsCreateOrUpdateResponse,
  AvailabilitySetUpdate,
  AvailabilitySetsUpdateResponse,
  AvailabilitySetsGetResponse,
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListBySubscriptionResponse,
  AvailabilitySetsListResponse,
  AvailabilitySetsListAvailableSizesResponse,
  AvailabilitySetsListBySubscriptionNextOptionalParams,
  AvailabilitySetsListBySubscriptionNextResponse,
  AvailabilitySetsListNextResponse
} from "../models";

/**
 * Class representing a AvailabilitySets.
 */
export class AvailabilitySets {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class AvailabilitySets class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Create or update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySet,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<AvailabilitySetsCreateOrUpdateResponse>;
  }

  /**
   * Update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySetUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        parameters,
        options: operationOptions
      },
      updateOperationSpec
    ) as Promise<AvailabilitySetsUpdateResponse>;
  }

  /**
   * Delete an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Retrieves information about an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options: operationOptions },
      getOperationSpec
    ) as Promise<AvailabilitySetsGetResponse>;
  }

  /**
   * Lists all availability sets in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AvailabilitySetsListBySubscriptionOptionalParams
  ): Promise<AvailabilitySetsListBySubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBySubscriptionOperationSpec
    ) as Promise<AvailabilitySetsListBySubscriptionResponse>;
  }

  /**
   * Lists all availability sets in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<AvailabilitySetsListResponse>;
  }

  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  listAvailableSizes(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsListAvailableSizesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options: operationOptions },
      listAvailableSizesOperationSpec
    ) as Promise<AvailabilitySetsListAvailableSizesResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  listBySubscriptionNext(
    nextLink: string,
    options?: AvailabilitySetsListBySubscriptionNextOptionalParams
  ): Promise<AvailabilitySetsListBySubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBySubscriptionNextOperationSpec
    ) as Promise<AvailabilitySetsListBySubscriptionNextResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<AvailabilitySetsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<AvailabilitySetsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/availabilitySets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
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
const listAvailableSizesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineSizeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
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
