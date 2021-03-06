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
import { ADHybridHealthService } from "../aDHybridHealthService";
import {
  ListIPAddressAggregatesByServiceOptionalParams,
  ListIPAddressAggregatesByServiceResponse,
  ListIPAddressAggregateSettingsResponse,
  ListIPAddressAggregatesByServiceNextOptionalParams,
  ListIPAddressAggregatesByServiceNextResponse
} from "../models";

/**
 * Class representing a List.
 */
export class List {
  private readonly client: ADHybridHealthService;

  /**
   * Initialize a new instance of the class List class.
   * @param client Reference to the service client
   */
  constructor(client: ADHybridHealthService) {
    this.client = client;
  }

  /**
   * Gets the IP address aggregates for a given service.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  iPAddressAggregatesByService(
    serviceName: string,
    options?: ListIPAddressAggregatesByServiceOptionalParams
  ): Promise<ListIPAddressAggregatesByServiceResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      iPAddressAggregatesByServiceOperationSpec
    ) as Promise<ListIPAddressAggregatesByServiceResponse>;
  }

  /**
   * Gets the IP address aggregate settings.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  iPAddressAggregateSettings(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ListIPAddressAggregateSettingsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      iPAddressAggregateSettingsOperationSpec
    ) as Promise<ListIPAddressAggregateSettingsResponse>;
  }

  /**
   * IPAddressAggregatesByServiceNext
   * @param serviceName The name of the service.
   * @param nextLink The nextLink from the previous successful call to the IPAddressAggregatesByService
   *                 method.
   * @param options The options parameters.
   */
  iPAddressAggregatesByServiceNext(
    serviceName: string,
    nextLink: string,
    options?: ListIPAddressAggregatesByServiceNextOptionalParams
  ): Promise<ListIPAddressAggregatesByServiceNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, nextLink, options: operationOptions },
      iPAddressAggregatesByServiceNextOperationSpec
    ) as Promise<ListIPAddressAggregatesByServiceNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const iPAddressAggregatesByServiceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/ipAddressAggregates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPAddressAggregates
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const iPAddressAggregateSettingsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/ipAddressAggregateSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPAddressAggregateSetting
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const iPAddressAggregatesByServiceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPAddressAggregates
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};
