/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { SubscriptionClientContext } from "./subscriptionClientContext";
import { SubscriptionClientOptionalParams } from "./models";

class SubscriptionClient extends SubscriptionClientContext {
  /**
   * Initializes a new instance of the SubscriptionClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    options?: SubscriptionClientOptionalParams
  ) {
    super(credentials, options);
    this.operations = new operations.Operations(this);
    this.subscriptions = new operations.Subscriptions(this);
    this.tenants = new operations.Tenants(this);
  }

  operations: operations.Operations;
  subscriptions: operations.Subscriptions;
  tenants: operations.Tenants;
}

// Operation Specifications

export {
  SubscriptionClient,
  SubscriptionClientContext,
  Models as SubscriptionModels,
  Mappers as SubscriptionMappers
};
export * from "./operations";
