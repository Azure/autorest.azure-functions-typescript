// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile, StructureKind } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getMappersName, getModelsName } from "../utils/nameUtils";
import { ImplementationLocation } from "@autorest/codemodel";
import { generateFunctionJson, generateHttpTrigger } from "./azureFunctionsCodeGenerator";

export function generateAzureFunctionsFunctions(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const hasMappers = !!clientDetails.mappers.length;

  const clientFile = project.createSourceFile(
    `${clientDetails.srcPath}/${clientDetails.sourceFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );

  const importedModels = new Set<string>();


  writeAzureFunctionsFunctions(
    clientFile,
    clientDetails,
    hasLRO,
    importedModels,
    project
  );
}

function writeAzureFunctionsFunctions(
  file: SourceFile,
  clientDetails: ClientDetails,
  hasLRO: boolean,
  importedModels: Set<string>,
  project: Project
) {
  const topLevelGroup = clientDetails.operationGroups.find(og => og.isTopLevel);

  // @ts-ignore
  topLevelGroup.operations.forEach(operation => {
    const index_ts_file = project.createSourceFile(
      `${clientDetails.srcPath}/${operation.name}/index.ts`,
      undefined,
      { overwrite: true }
    );

    const importedModels = new Set<string>(["AzureFunction", "Context", "HttpRequest"]);
    index_ts_file.addImportDeclaration({
      namedImports: [...importedModels],
      moduleSpecifier: "@azure/functions"
    });

    index_ts_file.addImportDeclaration({
      namespaceImport: "Models",
      moduleSpecifier: "../models"
    });

    // index_ts_file.addStatements(generateHttpTrigger(operation))
    index_ts_file.addFunction({
      name: `${operation.name}`,
      returnType: "Promise<void>",
      isDefaultExport: true,
      isAsync: true,
      parameters: [{
        name: "context",
        type: "Context",
        kind: StructureKind.Parameter
      }, {
        name: "req",
        type: "HttpRequest",
        kind: StructureKind.Parameter
      }],
      statements: generateHttpTrigger(operation)
    });

    const function_json = project.createSourceFile(
      `${clientDetails.srcPath}/${operation.name}/function.json`,
      generateFunctionJson(operation),
      { overwrite: true }
    );
    function_json.save();
  });
}