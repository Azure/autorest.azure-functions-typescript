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
import { ResourceManagementClient } from "../resourceManagementClient";
import {
  ProvidersUnregisterResponse,
  ProvidersRegisterResponse,
  ProvidersListOptionalParams,
  ProvidersListResponse,
  ProvidersListAtTenantScopeOptionalParams,
  ProvidersListAtTenantScopeResponse,
  ProvidersGetOptionalParams,
  ProvidersGetResponse,
  ProvidersGetAtTenantScopeOptionalParams,
  ProvidersGetAtTenantScopeResponse,
  ProvidersListNextOptionalParams,
  ProvidersListNextResponse,
  ProvidersListAtTenantScopeNextOptionalParams,
  ProvidersListAtTenantScopeNextResponse
} from "../models";

/**
 * Class representing a Providers.
 */
export class Providers {
  private readonly client: ResourceManagementClient;

  /**
   * Initialize a new instance of the class Providers class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClient) {
    this.client = client;
  }

  /**
   * Unregisters a subscription from a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    options?: coreHttp.OperationOptions
  ): Promise<ProvidersUnregisterResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options: operationOptions },
      unregisterOperationSpec
    ) as Promise<ProvidersUnregisterResponse>;
  }

  /**
   * Registers a subscription with a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    options?: coreHttp.OperationOptions
  ): Promise<ProvidersRegisterResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options: operationOptions },
      registerOperationSpec
    ) as Promise<ProvidersRegisterResponse>;
  }

  /**
   * Gets all resource providers for a subscription.
   * @param options The options parameters.
   */
  list(options?: ProvidersListOptionalParams): Promise<ProvidersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<ProvidersListResponse>;
  }

  /**
   * Gets all resource providers for the tenant.
   * @param options The options parameters.
   */
  listAtTenantScope(
    options?: ProvidersListAtTenantScopeOptionalParams
  ): Promise<ProvidersListAtTenantScopeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAtTenantScopeOperationSpec
    ) as Promise<ProvidersListAtTenantScopeResponse>;
  }

  /**
   * Gets the specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    options?: ProvidersGetOptionalParams
  ): Promise<ProvidersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options: operationOptions },
      getOperationSpec
    ) as Promise<ProvidersGetResponse>;
  }

  /**
   * Gets the specified resource provider at the tenant level.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  getAtTenantScope(
    resourceProviderNamespace: string,
    options?: ProvidersGetAtTenantScopeOptionalParams
  ): Promise<ProvidersGetAtTenantScopeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options: operationOptions },
      getAtTenantScopeOperationSpec
    ) as Promise<ProvidersGetAtTenantScopeResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: ProvidersListNextOptionalParams
  ): Promise<ProvidersListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ProvidersListNextResponse>;
  }

  /**
   * ListAtTenantScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  listAtTenantScopeNext(
    nextLink: string,
    options?: ProvidersListAtTenantScopeNextOptionalParams
  ): Promise<ProvidersListAtTenantScopeNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAtTenantScopeNextOperationSpec
    ) as Promise<ProvidersListAtTenantScopeNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const unregisterOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/unregister",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  serializer
};
const registerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/register",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAtTenantScopeOperationSpec: coreHttp.OperationSpec = {
  path: "/providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  serializer
};
const getAtTenantScopeOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/{resourceProviderNamespace}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.resourceProviderNamespace],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  serializer
};
const listAtTenantScopeNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  serializer
};
