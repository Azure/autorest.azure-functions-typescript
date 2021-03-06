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
import { NetworkManagementClient } from "../networkManagementClient";
import {
  VpnSiteLinksGetResponse,
  VpnSiteLinksListByVpnSiteResponse,
  VpnSiteLinksListByVpnSiteNextResponse
} from "../models";

/**
 * Class representing a VpnSiteLinks.
 */
export class VpnSiteLinks {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnSiteLinks class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the details of a VPN site link.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite.
   * @param vpnSiteLinkName The name of the VpnSiteLink being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteLinkName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSiteLinksGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnSiteName,
        vpnSiteLinkName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<VpnSiteLinksGetResponse>;
  }

  /**
   * Lists all the vpnSiteLinks in a resource group for a vpn site.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite.
   * @param options The options parameters.
   */
  listByVpnSite(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSiteLinksListByVpnSiteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vpnSiteName, options: operationOptions },
      listByVpnSiteOperationSpec
    ) as Promise<VpnSiteLinksListByVpnSiteResponse>;
  }

  /**
   * ListByVpnSiteNext
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite.
   * @param nextLink The nextLink from the previous successful call to the ListByVpnSite method.
   * @param options The options parameters.
   */
  listByVpnSiteNext(
    resourceGroupName: string,
    vpnSiteName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSiteLinksListByVpnSiteNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vpnSiteName, nextLink, options: operationOptions },
      listByVpnSiteNextOperationSpec
    ) as Promise<VpnSiteLinksListByVpnSiteNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}/vpnSiteLinks/{vpnSiteLinkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSiteLink
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName,
    Parameters.vpnSiteLinkName
  ],
  serializer
};
const listByVpnSiteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}/vpnSiteLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinksResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName
  ],
  serializer
};
const listByVpnSiteNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinksResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vpnSiteName
  ],
  serializer
};
