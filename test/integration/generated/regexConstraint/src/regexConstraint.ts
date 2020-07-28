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
import { RegexConstraintContext } from "./regexConstraintContext";
import {
  RegexConstraintOptionalParams,
  RegexConstraintApiV1ValueGetResponse
} from "./models";

class RegexConstraint extends RegexConstraintContext {
  /**
   * Initializes a new instance of the RegexConstraint class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: RegexConstraintOptionalParams) {
    super($host, options);
  }

  /**
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3 characters,
   *                   and a maximum of 63.
   * @param options The options parameters.
   */
  apiV1ValueGet(
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RegexConstraintApiV1ValueGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { serverName, options: operationOptions },
      apiV1ValueGetOperationSpec
    ) as Promise<RegexConstraintApiV1ValueGetResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreHttp.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.serverName],
  serializer
};

// Operation Specifications

export {
  RegexConstraint,
  RegexConstraintContext,
  Models as RegexConstraintModels
};
