// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, VariableDeclarationKind } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";
import { normalizeName, NameType } from "../../utils/nameUtils";

export function generateRollupConfig(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const rollupFile = project.createSourceFile("rollup.config.js", undefined, {
    overwrite: true
  });

  let browserNameSpace = normalizeName(
    packageDetails.nameWithoutScope,
    NameType.Class
  );

  if (packageDetails.scopeName) {
    browserNameSpace = `${normalizeName(
      packageDetails.scopeName,
      NameType.Class
    )}.${browserNameSpace}`;
  }

  rollupFile.addStatements([
    `import rollup from "rollup";`,
    `import nodeResolve from "rollup-plugin-node-resolve";`,
    `import sourcemaps from "rollup-plugin-sourcemaps";`
  ]);

  const rollupConfig = `{
    input: "./esm/${clientDetails.sourceFileName}.js",
    external: [
      "@azure/core-http",
      "@azure/core-arm"
    ],
    output: {
      file: "./dist/${packageDetails.nameWithoutScope}.js",
      format: "umd",
      name: "${browserNameSpace}",
      sourcemap: true,
      globals: {
        "@azure/core-http": "coreHttp",
        "@azure/core-arm": "coreArm"
      },
      banner: \`/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */ \`
    },
    plugins: [
      nodeResolve({ module: true }),
      sourcemaps()
    ]
};`;

  rollupFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    docs: ["@type {rollup.RollupFileOptions}"],
    declarations: [
      {
        name: "config",
        initializer: rollupConfig
      }
    ]
  });

  rollupFile.addStatements("\n\nexport default config;");
}
