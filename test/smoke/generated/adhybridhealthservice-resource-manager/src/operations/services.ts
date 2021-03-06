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
  ServicesListOptionalParams,
  ServicesListResponse,
  ServiceProperties,
  ServicesAddResponse,
  ServicesListPremiumOptionalParams,
  ServicesListPremiumResponse,
  ServicesGetResponse,
  ServicesDeleteOptionalParams,
  ServicesUpdateResponse,
  ServicesListAlertsOptionalParams,
  ServicesListAlertsResponse,
  ServicesGetFeatureAvailibilityResponse,
  ServicesListExportErrorsResponse,
  ServicesListExportErrorsV2Response,
  ServicesListExportStatusResponse,
  AlertFeedback,
  ServicesAddAlertFeedbackResponse,
  ServicesListAlertFeedbackResponse,
  ServicesListMetricsAverageResponse,
  ServicesListMetricsSumResponse,
  ServicesListMetricMetadataOptionalParams,
  ServicesListMetricMetadataResponse,
  ServicesGetMetricMetadataResponse,
  ServicesGetMetricMetadataForGroupOptionalParams,
  ServicesGetMetricMetadataForGroupResponse,
  Item,
  ServicesListMonitoringConfigurationsResponse,
  ServicesListUserBadPasswordReportOptionalParams,
  ServicesListUserBadPasswordReportResponse,
  ServicesGetTenantWhitelistingResponse,
  ServicesListAllRiskyIpDownloadReportResponse,
  ServicesListCurrentRiskyIpDownloadReportResponse,
  ServicesListNextOptionalParams,
  ServicesListNextResponse,
  ServicesListPremiumNextOptionalParams,
  ServicesListPremiumNextResponse,
  ServicesListAlertsNextOptionalParams,
  ServicesListAlertsNextResponse,
  ServicesListExportStatusNextResponse,
  ServicesListMetricsAverageNextResponse,
  ServicesListMetricsSumNextResponse,
  ServicesListMetricMetadataNextOptionalParams,
  ServicesListMetricMetadataNextResponse
} from "../models";

/**
 * Class representing a Services.
 */
export class Services {
  private readonly client: ADHybridHealthService;

  /**
   * Initialize a new instance of the class Services class.
   * @param client Reference to the service client
   */
  constructor(client: ADHybridHealthService) {
    this.client = client;
  }

  /**
   * Gets the details of services, for a tenant, that are onboarded to Azure Active Directory Connect
   * Health.
   * @param options The options parameters.
   */
  list(options?: ServicesListOptionalParams): Promise<ServicesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<ServicesListResponse>;
  }

  /**
   * Onboards a service for a given tenant in Azure Active Directory Connect Health.
   * @param service The service object.
   * @param options The options parameters.
   */
  add(
    service: ServiceProperties,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesAddResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { service, options: operationOptions },
      addOperationSpec
    ) as Promise<ServicesAddResponse>;
  }

  /**
   * Gets the details of services for a tenant having Azure AD Premium license and is onboarded to Azure
   * Active Directory Connect Health.
   * @param options The options parameters.
   */
  listPremium(
    options?: ServicesListPremiumOptionalParams
  ): Promise<ServicesListPremiumResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listPremiumOperationSpec
    ) as Promise<ServicesListPremiumResponse>;
  }

  /**
   * Gets the details of a service for a tenant having Azure AD Premium license and is onboarded to Azure
   * Active Directory Connect Health.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  get(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      getOperationSpec
    ) as Promise<ServicesGetResponse>;
  }

  /**
   * Deletes a service which is onboarded to Azure Active Directory Connect Health.
   * @param serviceName The name of the service which needs to be deleted.
   * @param options The options parameters.
   */
  delete(
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Updates the service properties of an onboarded service.
   * @param serviceName The name of the service which needs to be deleted.
   * @param service The service object.
   * @param options The options parameters.
   */
  update(
    serviceName: string,
    service: ServiceProperties,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, service, options: operationOptions },
      updateOperationSpec
    ) as Promise<ServicesUpdateResponse>;
  }

  /**
   * Gets the alerts for a given service.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listAlerts(
    serviceName: string,
    options?: ServicesListAlertsOptionalParams
  ): Promise<ServicesListAlertsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listAlertsOperationSpec
    ) as Promise<ServicesListAlertsResponse>;
  }

  /**
   * Checks if the service has all the pre-requisites met to use a feature.
   * @param serviceName The name of the service.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  getFeatureAvailibility(
    serviceName: string,
    featureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesGetFeatureAvailibilityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, featureName, options: operationOptions },
      getFeatureAvailibilityOperationSpec
    ) as Promise<ServicesGetFeatureAvailibilityResponse>;
  }

  /**
   * Gets the count of latest AAD export errors.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listExportErrors(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListExportErrorsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listExportErrorsOperationSpec
    ) as Promise<ServicesListExportErrorsResponse>;
  }

  /**
   *  Gets the categorized export errors.
   * @param serviceName The name of the service.
   * @param errorBucket The error category to query for.
   * @param options The options parameters.
   */
  listExportErrorsV2(
    serviceName: string,
    errorBucket: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListExportErrorsV2Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, errorBucket, options: operationOptions },
      listExportErrorsV2OperationSpec
    ) as Promise<ServicesListExportErrorsV2Response>;
  }

  /**
   * Gets the export status.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listExportStatus(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListExportStatusResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listExportStatusOperationSpec
    ) as Promise<ServicesListExportStatusResponse>;
  }

  /**
   * Adds an alert feedback submitted by customer.
   * @param serviceName The name of the service.
   * @param alertFeedback The alert feedback.
   * @param options The options parameters.
   */
  addAlertFeedback(
    serviceName: string,
    alertFeedback: AlertFeedback,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesAddAlertFeedbackResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, alertFeedback, options: operationOptions },
      addAlertFeedbackOperationSpec
    ) as Promise<ServicesAddAlertFeedbackResponse>;
  }

  /**
   * Gets a list of all alert feedback for a given tenant and alert type.
   * @param serviceName The name of the service.
   * @param shortName The name of the alert.
   * @param options The options parameters.
   */
  listAlertFeedback(
    serviceName: string,
    shortName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListAlertFeedbackResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, shortName, options: operationOptions },
      listAlertFeedbackOperationSpec
    ) as Promise<ServicesListAlertFeedbackResponse>;
  }

  /**
   * Gets the average of the metric values for a given metric and group combination.
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param groupName The group name
   * @param options The options parameters.
   */
  listMetricsAverage(
    serviceName: string,
    metricName: string,
    groupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListMetricsAverageResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, metricName, groupName, options: operationOptions },
      listMetricsAverageOperationSpec
    ) as Promise<ServicesListMetricsAverageResponse>;
  }

  /**
   * Gets the sum of the metric values for a given metric and group combination.
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param groupName The group name
   * @param options The options parameters.
   */
  listMetricsSum(
    serviceName: string,
    metricName: string,
    groupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListMetricsSumResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, metricName, groupName, options: operationOptions },
      listMetricsSumOperationSpec
    ) as Promise<ServicesListMetricsSumResponse>;
  }

  /**
   * Gets the service related metrics information.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listMetricMetadata(
    serviceName: string,
    options?: ServicesListMetricMetadataOptionalParams
  ): Promise<ServicesListMetricMetadataResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listMetricMetadataOperationSpec
    ) as Promise<ServicesListMetricMetadataResponse>;
  }

  /**
   * Gets the service related metrics information.
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param options The options parameters.
   */
  getMetricMetadata(
    serviceName: string,
    metricName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesGetMetricMetadataResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, metricName, options: operationOptions },
      getMetricMetadataOperationSpec
    ) as Promise<ServicesGetMetricMetadataResponse>;
  }

  /**
   * Gets the service related metrics for a given metric and group combination.
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param groupName The group name
   * @param options The options parameters.
   */
  getMetricMetadataForGroup(
    serviceName: string,
    metricName: string,
    groupName: string,
    options?: ServicesGetMetricMetadataForGroupOptionalParams
  ): Promise<ServicesGetMetricMetadataForGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, metricName, groupName, options: operationOptions },
      getMetricMetadataForGroupOperationSpec
    ) as Promise<ServicesGetMetricMetadataForGroupResponse>;
  }

  /**
   * Updates the service level monitoring configuration.
   * @param serviceName The name of the service.
   * @param configurationSetting The monitoring configuration to update
   * @param options The options parameters.
   */
  updateMonitoringConfiguration(
    serviceName: string,
    configurationSetting: Item,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, configurationSetting, options: operationOptions },
      updateMonitoringConfigurationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the service level monitoring configurations.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listMonitoringConfigurations(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListMonitoringConfigurationsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listMonitoringConfigurationsOperationSpec
    ) as Promise<ServicesListMonitoringConfigurationsResponse>;
  }

  /**
   * Gets the bad password login attempt report for an user
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listUserBadPasswordReport(
    serviceName: string,
    options?: ServicesListUserBadPasswordReportOptionalParams
  ): Promise<ServicesListUserBadPasswordReportResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listUserBadPasswordReportOperationSpec
    ) as Promise<ServicesListUserBadPasswordReportResponse>;
  }

  /**
   * Checks if the tenant, to which a service is registered, is whitelisted to use a feature.
   * @param serviceName The name of the service.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  getTenantWhitelisting(
    serviceName: string,
    featureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesGetTenantWhitelistingResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, featureName, options: operationOptions },
      getTenantWhitelistingOperationSpec
    ) as Promise<ServicesGetTenantWhitelistingResponse>;
  }

  /**
   * Gets all Risky IP report URIs for the last 7 days.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listAllRiskyIpDownloadReport(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListAllRiskyIpDownloadReportResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listAllRiskyIpDownloadReportOperationSpec
    ) as Promise<ServicesListAllRiskyIpDownloadReportResponse>;
  }

  /**
   * Initiate the generation of a new Risky IP report. Returns the URI for the new one.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listCurrentRiskyIpDownloadReport(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListCurrentRiskyIpDownloadReportResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listCurrentRiskyIpDownloadReportOperationSpec
    ) as Promise<ServicesListCurrentRiskyIpDownloadReportResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: ServicesListNextOptionalParams
  ): Promise<ServicesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ServicesListNextResponse>;
  }

  /**
   * ListPremiumNext
   * @param nextLink The nextLink from the previous successful call to the ListPremium method.
   * @param options The options parameters.
   */
  listPremiumNext(
    nextLink: string,
    options?: ServicesListPremiumNextOptionalParams
  ): Promise<ServicesListPremiumNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listPremiumNextOperationSpec
    ) as Promise<ServicesListPremiumNextResponse>;
  }

  /**
   * ListAlertsNext
   * @param serviceName The name of the service.
   * @param nextLink The nextLink from the previous successful call to the ListAlerts method.
   * @param options The options parameters.
   */
  listAlertsNext(
    serviceName: string,
    nextLink: string,
    options?: ServicesListAlertsNextOptionalParams
  ): Promise<ServicesListAlertsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, nextLink, options: operationOptions },
      listAlertsNextOperationSpec
    ) as Promise<ServicesListAlertsNextResponse>;
  }

  /**
   * ListExportStatusNext
   * @param serviceName The name of the service.
   * @param nextLink The nextLink from the previous successful call to the ListExportStatus method.
   * @param options The options parameters.
   */
  listExportStatusNext(
    serviceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListExportStatusNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, nextLink, options: operationOptions },
      listExportStatusNextOperationSpec
    ) as Promise<ServicesListExportStatusNextResponse>;
  }

  /**
   * ListMetricsAverageNext
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param groupName The group name
   * @param nextLink The nextLink from the previous successful call to the ListMetricsAverage method.
   * @param options The options parameters.
   */
  listMetricsAverageNext(
    serviceName: string,
    metricName: string,
    groupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListMetricsAverageNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        serviceName,
        metricName,
        groupName,
        nextLink,
        options: operationOptions
      },
      listMetricsAverageNextOperationSpec
    ) as Promise<ServicesListMetricsAverageNextResponse>;
  }

  /**
   * ListMetricsSumNext
   * @param serviceName The name of the service.
   * @param metricName The metric name
   * @param groupName The group name
   * @param nextLink The nextLink from the previous successful call to the ListMetricsSum method.
   * @param options The options parameters.
   */
  listMetricsSumNext(
    serviceName: string,
    metricName: string,
    groupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServicesListMetricsSumNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        serviceName,
        metricName,
        groupName,
        nextLink,
        options: operationOptions
      },
      listMetricsSumNextOperationSpec
    ) as Promise<ServicesListMetricsSumNextResponse>;
  }

  /**
   * ListMetricMetadataNext
   * @param serviceName The name of the service.
   * @param nextLink The nextLink from the previous successful call to the ListMetricMetadata method.
   * @param options The options parameters.
   */
  listMetricMetadataNext(
    serviceName: string,
    nextLink: string,
    options?: ServicesListMetricMetadataNextOptionalParams
  ): Promise<ServicesListMetricMetadataNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, nextLink, options: operationOptions },
      listMetricMetadataNextOperationSpec
    ) as Promise<ServicesListMetricMetadataNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Services
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.serviceType,
    Parameters.skipCount,
    Parameters.takeCount,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host],
  serializer
};
const addOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceProperties
    }
  },
  requestBody: Parameters.service,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listPremiumOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services/premiumCheck",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Services
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.serviceType,
    Parameters.skipCount,
    Parameters.takeCount,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceProperties
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.confirm],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.ADHybridHealthService/services/{serviceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceProperties
    }
  },
  requestBody: Parameters.service,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAlertsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alerts
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.state,
    Parameters.fromParam,
    Parameters.to
  ],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const getFeatureAvailibilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/checkServiceFeatureAvailibility/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Result
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.featureName
  ],
  serializer
};
const listExportErrorsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/counts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ErrorCounts
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listExportErrorsV2OperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/listV2",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MergedExportErrors
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.errorBucket],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listExportStatusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/exportstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExportStatuses
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const addAlertFeedbackOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/feedback",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AlertFeedback
    }
  },
  requestBody: Parameters.alertFeedback,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAlertFeedbackOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/{shortName}/alertfeedback",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertFeedbacks
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.shortName
  ],
  serializer
};
const listMetricsAverageOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/average",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Metrics
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName,
    Parameters.groupName
  ],
  serializer
};
const listMetricsSumOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/sum",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Metrics
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName,
    Parameters.groupName
  ],
  serializer
};
const listMetricMetadataOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricMetadataList
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.perfCounter
  ],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const getMetricMetadataOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricMetadata
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName
  ],
  serializer
};
const getMetricMetadataForGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName}/groups/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricSets
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.groupKey,
    Parameters.fromDate,
    Parameters.toDate
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName,
    Parameters.groupName
  ],
  serializer
};
const updateMonitoringConfigurationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfiguration",
  httpMethod: "PATCH",
  responses: { 200: {} },
  requestBody: Parameters.configurationSetting,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listMonitoringConfigurationsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Items
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listUserBadPasswordReportOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/badpassword/details/user",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ErrorReportUsersEntries
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.dataSource],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const getTenantWhitelistingOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/TenantWhitelisting/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Result
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.featureName
  ],
  serializer
};
const listAllRiskyIpDownloadReportOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/blobUris",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RiskyIPBlobUris
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listCurrentRiskyIpDownloadReportOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/generateBlobUri",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RiskyIPBlobUris
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Services
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.serviceType,
    Parameters.skipCount,
    Parameters.takeCount,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  serializer
};
const listPremiumNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Services
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.serviceType,
    Parameters.skipCount,
    Parameters.takeCount,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  serializer
};
const listAlertsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alerts
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.state,
    Parameters.fromParam,
    Parameters.to
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};
const listExportStatusNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExportStatuses
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};
const listMetricsAverageNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Metrics
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName,
    Parameters.groupName,
    Parameters.nextLink
  ],
  serializer
};
const listMetricsSumNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Metrics
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.metricName,
    Parameters.groupName,
    Parameters.nextLink
  ],
  serializer
};
const listMetricMetadataNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricMetadataList
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.perfCounter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};
