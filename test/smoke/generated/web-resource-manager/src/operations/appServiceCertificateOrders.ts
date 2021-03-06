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
import { WebSiteManagementClient } from "../webSiteManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  AppServiceCertificateOrdersListResponse,
  AppServiceCertificateOrder,
  AppServiceCertificateOrdersListByResourceGroupResponse,
  AppServiceCertificateOrdersGetResponse,
  AppServiceCertificateOrdersCreateOrUpdateResponse,
  AppServiceCertificateOrderPatchResource,
  AppServiceCertificateOrdersUpdateResponse,
  AppServiceCertificateOrdersListCertificatesResponse,
  AppServiceCertificateOrdersGetCertificateResponse,
  AppServiceCertificateResource,
  AppServiceCertificateOrdersCreateOrUpdateCertificateResponse,
  AppServiceCertificatePatchResource,
  AppServiceCertificateOrdersUpdateCertificateResponse,
  ReissueCertificateOrderRequest,
  RenewCertificateOrderRequest,
  NameIdentifier,
  SiteSealRequest,
  AppServiceCertificateOrdersRetrieveSiteSealResponse,
  AppServiceCertificateOrdersRetrieveCertificateActionsResponse,
  AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse,
  AppServiceCertificateOrdersListNextResponse,
  AppServiceCertificateOrdersListByResourceGroupNextResponse,
  AppServiceCertificateOrdersListCertificatesNextResponse
} from "../models";

/**
 * Class representing a AppServiceCertificateOrders.
 */
export class AppServiceCertificateOrders {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class AppServiceCertificateOrders class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for List all certificate orders in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<AppServiceCertificateOrdersListResponse>;
  }

  /**
   * Description for Validate information for a certificate order.
   * @param appServiceCertificateOrder Information for a certificate order.
   * @param options The options parameters.
   */
  validatePurchaseInformation(
    appServiceCertificateOrder: AppServiceCertificateOrder,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { appServiceCertificateOrder, options: operationOptions },
      validatePurchaseInformationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Get certificate orders in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<AppServiceCertificateOrdersListByResourceGroupResponse>;
  }

  /**
   * Description for Get a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order..
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, certificateOrderName, options: operationOptions },
      getOperationSpec
    ) as Promise<AppServiceCertificateOrdersGetResponse>;
  }

  /**
   * Description for Create or update a certificate purchase order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param certificateDistinguishedName Distinguished name to use for the certificate order.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    certificateOrderName: string,
    certificateDistinguishedName: AppServiceCertificateOrder,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<AppServiceCertificateOrdersCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      certificateOrderName,
      certificateDistinguishedName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        AppServiceCertificateOrdersCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Description for Delete an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, certificateOrderName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Create or update a certificate purchase order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param certificateDistinguishedName Distinguished name to use for the certificate order.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    certificateOrderName: string,
    certificateDistinguishedName: AppServiceCertificateOrderPatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        certificateDistinguishedName,
        options: operationOptions
      },
      updateOperationSpec
    ) as Promise<AppServiceCertificateOrdersUpdateResponse>;
  }

  /**
   * Description for List all certificates associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  listCertificates(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListCertificatesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, certificateOrderName, options: operationOptions },
      listCertificatesOperationSpec
    ) as Promise<AppServiceCertificateOrdersListCertificatesResponse>;
  }

  /**
   * Description for Get the certificate associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  getCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersGetCertificateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        name,
        options: operationOptions
      },
      getCertificateOperationSpec
    ) as Promise<AppServiceCertificateOrdersGetCertificateResponse>;
  }

  /**
   * Description for Creates or updates a certificate and associates with key vault secret.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param keyVaultCertificate Key vault certificate resource Id.
   * @param options The options parameters.
   */
  async createOrUpdateCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    keyVaultCertificate: AppServiceCertificateResource,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<AppServiceCertificateOrdersCreateOrUpdateCertificateResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      certificateOrderName,
      name,
      keyVaultCertificate,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        AppServiceCertificateOrdersCreateOrUpdateCertificateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateCertificateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateCertificateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Description for Delete the certificate associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  deleteCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        name,
        options: operationOptions
      },
      deleteCertificateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Creates or updates a certificate and associates with key vault secret.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param keyVaultCertificate Key vault certificate resource Id.
   * @param options The options parameters.
   */
  updateCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    keyVaultCertificate: AppServiceCertificatePatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersUpdateCertificateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        name,
        keyVaultCertificate,
        options: operationOptions
      },
      updateCertificateOperationSpec
    ) as Promise<AppServiceCertificateOrdersUpdateCertificateResponse>;
  }

  /**
   * Description for Reissue an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param reissueCertificateOrderRequest Parameters for the reissue.
   * @param options The options parameters.
   */
  reissue(
    resourceGroupName: string,
    certificateOrderName: string,
    reissueCertificateOrderRequest: ReissueCertificateOrderRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        reissueCertificateOrderRequest,
        options: operationOptions
      },
      reissueOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Renew an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param renewCertificateOrderRequest Renew parameters
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    certificateOrderName: string,
    renewCertificateOrderRequest: RenewCertificateOrderRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        renewCertificateOrderRequest,
        options: operationOptions
      },
      renewOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Resend certificate email.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  resendEmail(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, certificateOrderName, options: operationOptions },
      resendEmailOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param nameIdentifier Email address
   * @param options The options parameters.
   */
  resendRequestEmails(
    resourceGroupName: string,
    certificateOrderName: string,
    nameIdentifier: NameIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        nameIdentifier,
        options: operationOptions
      },
      resendRequestEmailsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param siteSealRequest Site seal request.
   * @param options The options parameters.
   */
  retrieveSiteSeal(
    resourceGroupName: string,
    certificateOrderName: string,
    siteSealRequest: SiteSealRequest,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersRetrieveSiteSealResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        siteSealRequest,
        options: operationOptions
      },
      retrieveSiteSealOperationSpec
    ) as Promise<AppServiceCertificateOrdersRetrieveSiteSealResponse>;
  }

  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  verifyDomainOwnership(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, certificateOrderName, options: operationOptions },
      verifyDomainOwnershipOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Retrieve the list of certificate actions.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate order.
   * @param options The options parameters.
   */
  retrieveCertificateActions(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersRetrieveCertificateActionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options: operationOptions },
      retrieveCertificateActionsOperationSpec
    ) as Promise<AppServiceCertificateOrdersRetrieveCertificateActionsResponse>;
  }

  /**
   * Description for Retrieve email history.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate order.
   * @param options The options parameters.
   */
  retrieveCertificateEmailHistory(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options: operationOptions },
      retrieveCertificateEmailHistoryOperationSpec
    ) as Promise<
      AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse
    >;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<AppServiceCertificateOrdersListNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<AppServiceCertificateOrdersListByResourceGroupNextResponse>;
  }

  /**
   * ListCertificatesNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param nextLink The nextLink from the previous successful call to the ListCertificates method.
   * @param options The options parameters.
   */
  listCertificatesNext(
    resourceGroupName: string,
    certificateOrderName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<AppServiceCertificateOrdersListCertificatesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        certificateOrderName,
        nextLink,
        options: operationOptions
      },
      listCertificatesNextOperationSpec
    ) as Promise<AppServiceCertificateOrdersListCertificatesNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrderCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const validatePurchaseInformationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.appServiceCertificateOrder,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrderCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    201: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    202: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    204: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateDistinguishedName,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    201: {
      bodyMapper: Mappers.AppServiceCertificateOrder
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateDistinguishedName1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCertificatesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  serializer
};
const getCertificateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName,
    Parameters.name
  ],
  serializer
};
const createOrUpdateCertificateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    201: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    202: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    204: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.keyVaultCertificate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCertificateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName,
    Parameters.name
  ],
  serializer
};
const updateCertificateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    201: {
      bodyMapper: Mappers.AppServiceCertificateResource
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.keyVaultCertificate1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const reissueOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/reissue",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.reissueCertificateOrderRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const renewOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/renew",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.renewCertificateOrderRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const resendEmailOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendEmail",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  serializer
};
const resendRequestEmailsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendRequestEmails",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.nameIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const retrieveSiteSealOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/retrieveSiteSeal",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SiteSeal
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.siteSealRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const verifyDomainOwnershipOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/verifyDomainOwnership",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName
  ],
  serializer
};
const retrieveCertificateActionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "CertificateOrderAction" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  serializer
};
const retrieveCertificateEmailHistoryOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "CertificateEmail" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrderCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateOrderCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  serializer
};
const listCertificatesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppServiceCertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateOrderName,
    Parameters.nextLink
  ],
  serializer
};
