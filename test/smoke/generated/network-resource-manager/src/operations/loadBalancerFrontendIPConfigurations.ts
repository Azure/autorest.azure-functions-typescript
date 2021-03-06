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
import { NetworkManagementClient } from "../networkManagementClient";
import {
  LoadBalancerFrontendIPConfigurationsListResponse,
  LoadBalancerFrontendIPConfigurationsGetResponse,
  LoadBalancerFrontendIPConfigurationsListNextResponse
} from "../models";

/**
 * Class representing a LoadBalancerFrontendIPConfigurations.
 */
export class LoadBalancerFrontendIPConfigurations {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class LoadBalancerFrontendIPConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the load balancer frontend IP configurations.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerFrontendIPConfigurationsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, options: operationOptions },
      listOperationSpec
    ) as Promise<LoadBalancerFrontendIPConfigurationsListResponse>;
  }

  /**
   * Gets load balancer frontend IP configuration.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param frontendIPConfigurationName The name of the frontend IP configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    frontendIPConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerFrontendIPConfigurationsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        frontendIPConfigurationName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<LoadBalancerFrontendIPConfigurationsGetResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    loadBalancerName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerFrontendIPConfigurationsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        nextLink,
        options: operationOptions
      },
      listNextOperationSpec
    ) as Promise<LoadBalancerFrontendIPConfigurationsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/frontendIPConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerFrontendIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/frontendIPConfigurations/{frontendIPConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendIPConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName,
    Parameters.frontendIPConfigurationName
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerFrontendIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.loadBalancerName
  ],
  serializer
};
