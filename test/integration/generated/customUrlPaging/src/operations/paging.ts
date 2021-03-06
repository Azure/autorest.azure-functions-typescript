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
import { CustomUrlPagingClient } from "../customUrlPagingClient";
import {
  PagingGetPagesPartialUrlResponse,
  PagingGetPagesPartialUrlOperationResponse,
  PagingGetPagesPartialUrlOperationNextResponse,
  PagingGetPagesPartialUrlNextResponse
} from "../models";

/**
 * Class representing a Paging.
 */
export class Paging {
  private readonly client: CustomUrlPagingClient;

  /**
   * Initialize a new instance of the class Paging class.
   * @param client Reference to the service client
   */
  constructor(client: CustomUrlPagingClient) {
    this.client = client;
  }

  /**
   * A paging operation that combines custom url, paging and partial URL and expect to concat after host
   * @param accountName Account Name
   * @param options The options parameters.
   */
  getPagesPartialUrl(
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagesPartialUrlResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { accountName, options: operationOptions },
      getPagesPartialUrlOperationSpec
    ) as Promise<PagingGetPagesPartialUrlResponse>;
  }

  /**
   * A paging operation that combines custom url, paging and partial URL with next operation
   * @param accountName Account Name
   * @param options The options parameters.
   */
  getPagesPartialUrlOperation(
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagesPartialUrlOperationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { accountName, options: operationOptions },
      getPagesPartialUrlOperationOperationSpec
    ) as Promise<PagingGetPagesPartialUrlOperationResponse>;
  }

  /**
   * A paging operation that combines custom url, paging and partial URL
   * @param accountName Account Name
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  getPagesPartialUrlOperationNext(
    accountName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagesPartialUrlOperationNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { accountName, nextLink, options: operationOptions },
      getPagesPartialUrlOperationNextOperationSpec
    ) as Promise<PagingGetPagesPartialUrlOperationNextResponse>;
  }

  /**
   * GetPagesPartialUrlNext
   * @param accountName Account Name
   * @param nextLink The nextLink from the previous successful call to the GetPagesPartialUrl method.
   * @param options The options parameters.
   */
  getPagesPartialUrlNext(
    accountName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagesPartialUrlNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { accountName, nextLink, options: operationOptions },
      getPagesPartialUrlNextOperationSpec
    ) as Promise<PagingGetPagesPartialUrlNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getPagesPartialUrlOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/customurl/partialnextlink",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host],
  serializer
};
const getPagesPartialUrlOperationOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/customurl/partialnextlinkop",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host],
  serializer
};
const getPagesPartialUrlOperationNextOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/customurl/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host, Parameters.nextLink],
  serializer
};
const getPagesPartialUrlNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host, Parameters.nextLink],
  serializer
};
