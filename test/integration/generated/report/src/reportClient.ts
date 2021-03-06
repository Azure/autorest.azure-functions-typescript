/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { ReportClientContext } from "./reportClientContext";
import {
  ReportClientOptionalParams,
  ReportClientGetReportOptionalParams,
  ReportClientGetReportResponse,
  ReportClientGetOptionalReportOptionalParams,
  ReportClientGetOptionalReportResponse
} from "./models";

class ReportClient extends ReportClientContext {
  /**
   * Initializes a new instance of the ReportClient class.
   * @param options The parameter options
   */
  constructor(options?: ReportClientOptionalParams) {
    super(options);
  }

  /**
   * Get test coverage report
   * @param options The options parameters.
   */
  getReport(
    options?: ReportClientGetReportOptionalParams
  ): Promise<ReportClientGetReportResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getReportOperationSpec
    ) as Promise<ReportClientGetReportResponse>;
  }

  /**
   * Get optional test coverage report
   * @param options The options parameters.
   */
  getOptionalReport(
    options?: ReportClientGetOptionalReportOptionalParams
  ): Promise<ReportClientGetOptionalReportResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getOptionalReportOperationSpec
    ) as Promise<ReportClientGetOptionalReportResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getReportOperationSpec: coreHttp.OperationSpec = {
  path: "/report",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "Number" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.qualifier],
  urlParameters: [Parameters.$host],
  serializer
};
const getOptionalReportOperationSpec: coreHttp.OperationSpec = {
  path: "/report/optional",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "Number" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.qualifier],
  urlParameters: [Parameters.$host],
  serializer
};

// Operation Specifications

export {
  ReportClient,
  ReportClientContext,
  Models as ReportModels,
  Mappers as ReportMappers
};
