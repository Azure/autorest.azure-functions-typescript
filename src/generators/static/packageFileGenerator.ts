// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";

export function generatePackageJson(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );
  const packageJsonContents = {
    name: packageDetails.name.toLowerCase(),
    description:
      packageDetails.description ||
      `A generated Azure Functions App for ${packageDetails.name}.`,
    version: packageDetails.version,
    dependencies: {
      ...(hasLRO && { "@azure/core-lro": "^1.0.1" }),
      "@azure/core-http": "^1.1.4",
      tslib: "^1.9.3"
    },
    keywords: ["node", "azure", "typescript", "browser", "azure-functions"],
    scripts: {
      build: "tsc",
      watch: "tsc -w",
      prestart: "npm run build",
      start: "func start",
      test: "echo \"No tests yet...\""
    },
    devDependencies: {
      "@azure/functions": "^1.0.2-beta2",
      typescript: "^3.3.3"
    }
  };

  project.createSourceFile(
    "package.json",
    JSON.stringify(packageJsonContents),
    {
      overwrite: false
    }
  );
}
