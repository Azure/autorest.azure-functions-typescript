/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ProductResultValue {
  value?: Product[];
  nextLink?: string;
}

export interface Product {
  properties?: ProductProperties;
}

export interface ProductProperties {
  id?: number;
  name?: string;
}

export interface ProductResult {
  values?: Product[];
  nextLink?: string;
}

export interface OdataProductResult {
  values?: Product[];
  odataNextLink?: string;
}

export interface ProductResultValueWithXMSClientName {
  indexes?: Product[];
  nextLink?: string;
}

export interface OperationResult {
  /**
   * The status of the request
   */
  status?: OperationResultStatus;
}

/**
 * Parameter group
 */
export interface PagingGetMultiplePagesOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Parameter group
 */
export interface PagingGetOdataMultiplePagesOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Parameter group
 */
export interface PagingGetMultiplePagesWithOffsetOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Offset of return value
   */
  offset: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Parameter group
 */
export interface CustomParameterGroup {
  /**
   * Sets the api version to use.
   */
  apiVersion: string;
  /**
   * Sets the tenant to use.
   */
  tenant: string;
}

/**
 * Parameter group
 */
export interface PagingGetMultiplePagesLroOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Defines values for OperationResultStatus.
 */
export type OperationResultStatus =
  | "Succeeded"
  | "Failed"
  | "canceled"
  | "Accepted"
  | "Creating"
  | "Created"
  | "Updating"
  | "Updated"
  | "Deleting"
  | "Deleted"
  | "OK";

/**
 * Contains response data for the getNoItemNamePages operation.
 */
export type PagingGetNoItemNamePagesResponse = ProductResultValue & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResultValue;
  };
};

/**
 * Contains response data for the getNullNextLinkNamePages operation.
 */
export type PagingGetNullNextLinkNamePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getSinglePages operation.
 */
export type PagingGetSinglePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getMultiplePages operation.
 */
export type PagingGetMultiplePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getWithQueryParams operation.
 */
export type PagingGetWithQueryParamsResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the nextOperationWithQueryParams operation.
 */
export type PagingNextOperationWithQueryParamsResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetOdataMultiplePagesOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getOdataMultiplePages operation.
 */
export type PagingGetOdataMultiplePagesResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesWithOffsetOptionalParams
  extends coreHttp.OperationOptions {
  clientRequestId?: string;
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Contains response data for the getMultiplePagesWithOffset operation.
 */
export type PagingGetMultiplePagesWithOffsetResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesRetryFirst operation.
 */
export type PagingGetMultiplePagesRetryFirstResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesRetrySecond operation.
 */
export type PagingGetMultiplePagesRetrySecondResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getSinglePagesFailure operation.
 */
export type PagingGetSinglePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFailure operation.
 */
export type PagingGetMultiplePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFailureUri operation.
 */
export type PagingGetMultiplePagesFailureUriResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFragmentNextLink operation.
 */
export type PagingGetMultiplePagesFragmentNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFragmentWithGroupingNextLink operation.
 */
export type PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesLROOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getMultiplePagesLRO operation.
 */
export type PagingGetMultiplePagesLROResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the nextFragment operation.
 */
export type PagingNextFragmentResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Contains response data for the nextFragmentWithGrouping operation.
 */
export type PagingNextFragmentWithGroupingResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Contains response data for the getPagingModelWithItemNameWithXMSClientName operation.
 */
export type PagingGetPagingModelWithItemNameWithXMSClientNameResponse = ProductResultValueWithXMSClientName & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResultValueWithXMSClientName;
  };
};

/**
 * Contains response data for the getNoItemNamePagesNext operation.
 */
export type PagingGetNoItemNamePagesNextResponse = ProductResultValue & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResultValue;
  };
};

/**
 * Contains response data for the getSinglePagesNext operation.
 */
export type PagingGetSinglePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesNextOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getMultiplePagesNext operation.
 */
export type PagingGetMultiplePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetOdataMultiplePagesNextOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getOdataMultiplePagesNext operation.
 */
export type PagingGetOdataMultiplePagesNextResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OdataProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesWithOffsetNextOptionalParams
  extends coreHttp.OperationOptions {
  clientRequestId?: string;
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  timeout?: number;
}

/**
 * Contains response data for the getMultiplePagesWithOffsetNext operation.
 */
export type PagingGetMultiplePagesWithOffsetNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesRetryFirstNext operation.
 */
export type PagingGetMultiplePagesRetryFirstNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesRetrySecondNext operation.
 */
export type PagingGetMultiplePagesRetrySecondNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getSinglePagesFailureNext operation.
 */
export type PagingGetSinglePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFailureNext operation.
 */
export type PagingGetMultiplePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getMultiplePagesFailureUriNext operation.
 */
export type PagingGetMultiplePagesFailureUriNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Optional parameters.
 */
export interface PagingGetMultiplePagesLRONextOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameter group
   */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
}

/**
 * Contains response data for the getMultiplePagesLRONext operation.
 */
export type PagingGetMultiplePagesLRONextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResult;
  };
};

/**
 * Contains response data for the getPagingModelWithItemNameWithXMSClientNameNext operation.
 */
export type PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse = ProductResultValueWithXMSClientName & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ProductResultValueWithXMSClientName;
  };
};

/**
 * Optional parameters.
 */
export interface PagingClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
