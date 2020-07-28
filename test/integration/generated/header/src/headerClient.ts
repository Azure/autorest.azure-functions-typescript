/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { HeaderClientContext } from "./headerClientContext";
import { HeaderClientOptionalParams } from "./models";

class HeaderClient extends HeaderClientContext {
  /**
   * Initializes a new instance of the HeaderClient class.
   * @param options The parameter options
   */
  constructor(options?: HeaderClientOptionalParams) {
    super(options);
    this.header = new operations.Header(this);
  }

  header: operations.Header;
}

// Operation Specifications

export {
  HeaderClient,
  HeaderClientContext,
  Models as HeaderModels,
  Mappers as HeaderMappers
};
export * from "./operations";
