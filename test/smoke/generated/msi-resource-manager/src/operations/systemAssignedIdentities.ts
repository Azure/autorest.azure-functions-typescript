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
import { ManagedServiceIdentityClient } from "../managedServiceIdentityClient";
import { SystemAssignedIdentitiesGetByScopeResponse } from "../models";

/**
 * Class representing a SystemAssignedIdentities.
 */
export class SystemAssignedIdentities {
  private readonly client: ManagedServiceIdentityClient;

  /**
   * Initialize a new instance of the class SystemAssignedIdentities class.
   * @param client Reference to the service client
   */
  constructor(client: ManagedServiceIdentityClient) {
    this.client = client;
  }

  /**
   * Gets the systemAssignedIdentity available under the specified RP scope.
   * @param scope The resource provider scope of the resource. Parent resource being extended by Managed
   *              Identities.
   * @param options The options parameters.
   */
  getByScope(
    scope: string,
    options?: coreHttp.OperationOptions
  ): Promise<SystemAssignedIdentitiesGetByScopeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { scope, options: operationOptions },
      getByScopeOperationSpec
    ) as Promise<SystemAssignedIdentitiesGetByScopeResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getByScopeOperationSpec: coreHttp.OperationSpec = {
  path: "/{scope}/providers/Microsoft.ManagedIdentity/identities/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemAssignedIdentity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  serializer
};
