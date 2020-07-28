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
import { SubscriptionClient } from "../subscriptionClient";
import {
  SubscriptionsListLocationsResponse,
  SubscriptionsGetResponse,
  SubscriptionsListResponse,
  SubscriptionsListNextResponse
} from "../models";

/**
 * Class representing a Subscriptions.
 */
export class Subscriptions {
  private readonly client: SubscriptionClient;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: SubscriptionClient) {
    this.client = client;
  }

  /**
   * This operation provides all the locations that are available for resource providers; however, each
   * resource provider may support a subset of this list.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  listLocations(
    subscriptionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<SubscriptionsListLocationsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { subscriptionId, options: operationOptions },
      listLocationsOperationSpec
    ) as Promise<SubscriptionsListLocationsResponse>;
  }

  /**
   * Gets details about a specified subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<SubscriptionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { subscriptionId, options: operationOptions },
      getOperationSpec
    ) as Promise<SubscriptionsGetResponse>;
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<SubscriptionsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<SubscriptionsListResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SubscriptionsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<SubscriptionsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listLocationsOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  serializer
};
