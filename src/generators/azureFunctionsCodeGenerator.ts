import { OperationDetails } from "../models/operationDetails";
import { ConstantSchema } from "@azure-tools/codemodel";

export function generateHttpTrigger(operation: OperationDetails): string {
  let statements = `
    context.log('HTTP trigger function processed a request.');
  `;
  operation.parameters.forEach(parameter => {
    if (parameter.implementation !== "Client") {
      statements += `
        // ${parameter.language.default.description}
        const ${parameter.language.default.name} = req.query.${parameter.language.default.name};
      `;
    }
  });
  operation.requests.forEach(request => {
    request.parameters?.forEach(parameter => {
      if (parameter.schema.type === "constant") {
        if (parameter.language.default.name !== "contentType") {
          statements += `
            // ${parameter.language.default.description}
            const ${parameter.language.default.name}: ${(<ConstantSchema>parameter.schema).valueType.type} = req.query.${parameter.language.default.name};
          `;
        }
      }
      else if (parameter.schema.type === "object") {
        statements += `
          // ${parameter.language.default.description}
          const ${parameter.language.default.name}: Models.${parameter.schema.language.default.name} = <Models.${parameter.schema.language.default.name}>JSON.parse(req.body);
        `;
      }
    })
  });
  return statements;
}

export function generateHttpTriggerFunction(operation: OperationDetails) {
  const index_ts_file = `
      const ${operation.name}: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        context.log('HTTP trigger function processed a request.');
        const name = (req.query.name || (req.body && req.body.name));
        if (name) {
          context.res = {
              // status: 200, /* Defaults to 200 */
              body: "Hello " + (req.query.name || req.body.name)
          };
        }
        else {
          context.res = {
              status: 400,
              body: "Please pass a name on the query string or in the request body"
          };
        }
      };

      export default ${operation.name};
      `;

  return index_ts_file;
}

export function generateFunctionJson(operation: OperationDetails) {
  const functionJsonContents = {
    bindings: [
      {
        authLevel: "anonymous",
        type: "httpTrigger",
        direction: "in",
        name: "req",
        methods: [operation.requests[0].method.toLowerCase()],
        route: operation.requests[0].path.replace(/^\//,"")
      },
      {
        type: "http",
        direction: "out",
        name: "res"
      }
    ],
    scriptFile: `../dist/${operation.name}/index.js`
  };

  return JSON.stringify(functionJsonContents);
}