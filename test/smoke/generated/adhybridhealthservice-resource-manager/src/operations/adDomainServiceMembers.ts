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
  AdDomainServiceMembersListOptionalParams,
  AdDomainServiceMembersListResponse,
  AdDomainServiceMembersListNextOptionalParams,
  AdDomainServiceMembersListNextResponse
} from "../models";

/**
 * Class representing a AdDomainServiceMembers.
 */
export class AdDomainServiceMembers {
  private readonly client: ADHybridHealthService;

  /**
   * Initialize a new instance of the class AdDomainServiceMembers class.
   * @param client Reference to the service client
   */
  constructor(client: ADHybridHealthService) {
    this.client = client;
  }

  /**
   * Gets the details of the servers, for a given Active Directory Domain Service, that are onboarded to
   * Azure Active Directory Connect Health.
   * @param serviceName The name of the service.
   * @param isGroupbySite Indicates if the result should be grouped by site or not.
   * @param options The options parameters.
   */
  list(
    serviceName: string,
    isGroupbySite: boolean,
    options?: AdDomainServiceMembersListOptionalParams
  ): Promise<AdDomainServiceMembersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, isGroupbySite, options: operationOptions },
      listOperationSpec
    ) as Promise<AdDomainServiceMembersListResponse>;
  }

  /**
   * ListNext
   * @param serviceName The name of the service.
   * @param isGroupbySite Indicates if the result should be grouped by site or not.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    serviceName: string,
    isGroupbySite: boolean,
    nextLink: string,
    options?: AdDomainServiceMembersListNextOptionalParams
  ): Promise<AdDomainServiceMembersListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, isGroupbySite, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<AdDomainServiceMembersListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/addomainservicemembers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AddsServiceMembers
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.takeCount,
    Parameters.apiVersion,
    Parameters.isGroupbySite,
    Parameters.nextPartitionKey,
    Parameters.nextRowKey,
    Parameters.query1
  ],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AddsServiceMembers
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.takeCount,
    Parameters.apiVersion,
    Parameters.isGroupbySite,
    Parameters.nextPartitionKey,
    Parameters.nextRowKey,
    Parameters.query1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};
