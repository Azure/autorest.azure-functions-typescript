/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import { MediaTypesV3ClientContext } from "./mediaTypesV3ClientContext";
import { MediaTypesV3ClientOptionalParams } from "./models";

class MediaTypesV3Client extends MediaTypesV3ClientContext {
  /**
   * Initializes a new instance of the MediaTypesV3Client class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3ClientOptionalParams) {
    super($host, options);
    this.barApi = new operations.BarApi(this);
    this.fooApi = new operations.FooApi(this);
  }

  barApi: operations.BarApi;
  fooApi: operations.FooApi;
}

// Operation Specifications

export {
  MediaTypesV3Client,
  MediaTypesV3ClientContext,
  Models as MediaTypesV3Models
};
export * from "./operations";
