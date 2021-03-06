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
import { StorageManagementClient } from "../storageManagementClient";
import {
  EncryptionScope,
  EncryptionScopesPutResponse,
  EncryptionScopesPatchResponse,
  EncryptionScopesGetResponse,
  EncryptionScopesListResponse,
  EncryptionScopesListNextResponse
} from "../models";

/**
 * Class representing a EncryptionScopes.
 */
export class EncryptionScopes {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class EncryptionScopes class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Synchronously creates or updates an encryption scope under the specified storage account. If an
   * encryption scope is already created and a subsequent request is issued with different properties,
   * the encryption scope properties will be updated per the specified request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        encryptionScope,
        options: operationOptions
      },
      putOperationSpec
    ) as Promise<EncryptionScopesPutResponse>;
  }

  /**
   * Update encryption scope properties as specified in the request body. Update fails if the specified
   * encryption scope does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesPatchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        encryptionScope,
        options: operationOptions
      },
      patchOperationSpec
    ) as Promise<EncryptionScopesPatchResponse>;
  }

  /**
   * Returns the properties for the specified encryption scope.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<EncryptionScopesGetResponse>;
  }

  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options: operationOptions },
      listOperationSpec
    ) as Promise<EncryptionScopesListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<EncryptionScopesListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const putOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    201: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.encryptionScope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const patchOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.encryptionScope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  serializer
};
