/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as operations from "./operations";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { FeatureClientContext } from "./featureClientContext";
import {
  FeatureClientOptionalParams,
  FeatureClientListOperationsResponse,
  FeatureClientListOperationsNextResponse
} from "./models";

class FeatureClient extends FeatureClientContext {
  /**
   * Initializes a new instance of the FeatureClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: FeatureClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.features = new operations.Features(this);
  }

  /**
   * Lists all of the available Microsoft.Features REST API operations.
   * @param options The options parameters.
   */
  listOperations(
    options?: coreHttp.OperationOptions
  ): Promise<FeatureClientListOperationsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listOperationsOperationSpec
    ) as Promise<FeatureClientListOperationsResponse>;
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  listOperationsNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<FeatureClientListOperationsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      listOperationsNextOperationSpec
    ) as Promise<FeatureClientListOperationsNextResponse>;
  }

  features: operations.Features;
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Features/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  serializer
};
const listOperationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  serializer
};

// Operation Specifications

export {
  FeatureClient,
  FeatureClientContext,
  Models as FeatureModels,
  Mappers as FeatureMappers
};
export * from "./operations";
