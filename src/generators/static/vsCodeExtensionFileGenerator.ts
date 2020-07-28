// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";

export function generateVSCodeExtensionsFile(clientDetails: ClientDetails,
                                             project: Project) {
  const vsCodeExtensionFile = { recommendations: ["ms-azuretools.vscode-azurefunctions"] };

  project.createSourceFile(`${clientDetails.srcPath}/.vscode/extensions.json`, JSON.stringify(vsCodeExtensionFile), {
    overwrite: true
  });
}
