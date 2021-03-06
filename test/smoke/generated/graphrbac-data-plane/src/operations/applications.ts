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
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  ApplicationCreateParameters,
  ApplicationsCreateResponse,
  ApplicationsListOptionalParams,
  ApplicationsListResponse,
  ApplicationsGetResponse,
  ApplicationUpdateParameters,
  ApplicationsListOwnersResponse,
  AddOwnerParameters,
  ApplicationsListKeyCredentialsResponse,
  KeyCredentialsUpdateParameters,
  ApplicationsListPasswordCredentialsResponse,
  PasswordCredentialsUpdateParameters,
  ApplicationsGetServicePrincipalsIdByAppIdResponse,
  ApplicationsListNextResponse,
  ApplicationsListOwnersNextResponse
} from "../models";

/**
 * Class representing a Applications.
 */
export class Applications {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class Applications class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Create a new application.
   * @param parameters The parameters for creating an application.
   * @param options The options parameters.
   */
  create(
    parameters: ApplicationCreateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { parameters, options: operationOptions },
      createOperationSpec
    ) as Promise<ApplicationsCreateResponse>;
  }

  /**
   * Lists applications by filter parameters.
   * @param options The options parameters.
   */
  list(
    options?: ApplicationsListOptionalParams
  ): Promise<ApplicationsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<ApplicationsListResponse>;
  }

  /**
   * Delete an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  delete(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an application by object ID.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  get(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, options: operationOptions },
      getOperationSpec
    ) as Promise<ApplicationsGetResponse>;
  }

  /**
   * Update an existing application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update an existing application.
   * @param options The options parameters.
   */
  patch(
    applicationObjectId: string,
    parameters: ApplicationUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options: operationOptions },
      patchOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param options The options parameters.
   */
  listOwners(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsListOwnersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, options: operationOptions },
      listOwnersOperationSpec
    ) as Promise<ApplicationsListOwnersResponse>;
  }

  /**
   * Add an owner to an application.
   * @param applicationObjectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    applicationObjectId: string,
    parameters: AddOwnerParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options: operationOptions },
      addOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Remove a member from owners.
   * @param applicationObjectId The object ID of the application from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    applicationObjectId: string,
    ownerObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, ownerObjectId, options: operationOptions },
      removeOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  listKeyCredentials(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsListKeyCredentialsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, options: operationOptions },
      listKeyCredentialsOperationSpec
    ) as Promise<ApplicationsListKeyCredentialsResponse>;
  }

  /**
   * Update the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update the keyCredentials of an existing application.
   * @param options The options parameters.
   */
  updateKeyCredentials(
    applicationObjectId: string,
    parameters: KeyCredentialsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options: operationOptions },
      updateKeyCredentialsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get the passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  listPasswordCredentials(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsListPasswordCredentialsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, options: operationOptions },
      listPasswordCredentialsOperationSpec
    ) as Promise<ApplicationsListPasswordCredentialsResponse>;
  }

  /**
   * Update passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update passwordCredentials of an existing application.
   * @param options The options parameters.
   */
  updatePasswordCredentials(
    applicationObjectId: string,
    parameters: PasswordCredentialsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options: operationOptions },
      updatePasswordCredentialsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets an object id for a given application id from the current tenant.
   * @param applicationID The application ID.
   * @param options The options parameters.
   */
  getServicePrincipalsIdByAppId(
    applicationID: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsGetServicePrincipalsIdByAppIdResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationID, options: operationOptions },
      getServicePrincipalsIdByAppIdOperationSpec
    ) as Promise<ApplicationsGetServicePrincipalsIdByAppIdResponse>;
  }

  /**
   * Gets a list of applications from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ApplicationsListNextResponse>;
  }

  /**
   * ListOwnersNext
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  listOwnersNext(
    applicationObjectId: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationsListOwnersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { applicationObjectId, nextLink, options: operationOptions },
      listOwnersNextOperationSpec
    ) as Promise<ApplicationsListOwnersNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  serializer
};
const patchOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnersOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  serializer
};
const addOwnerOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/$links/owners",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOwnerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
    Parameters.ownerObjectId
  ],
  serializer
};
const listKeyCredentialsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/keyCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  serializer
};
const updateKeyCredentialsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/keyCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listPasswordCredentialsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PasswordCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  serializer
};
const updatePasswordCredentialsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getServicePrincipalsIdByAppIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalObjectResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationID
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  serializer
};
const listOwnersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.applicationObjectId
  ],
  serializer
};
