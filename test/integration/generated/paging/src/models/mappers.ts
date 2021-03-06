/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ProductResultValue: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProductResultValue",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ProductProperties"
        }
      }
    }
  }
};

export const ProductProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProductProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProductResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProductResult",
    modelProperties: {
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OdataProductResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OdataProductResult",
    modelProperties: {
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        }
      },
      odataNextLink: {
        serializedName: "odata\\.nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProductResultValueWithXMSClientName: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProductResultValueWithXMSClientName",
    modelProperties: {
      indexes: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};
