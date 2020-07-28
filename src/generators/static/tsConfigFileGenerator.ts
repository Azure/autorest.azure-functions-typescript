// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";

export function generateTsConfig(project: Project) {
  const tsConfigContents = {
    compilerOptions: {
    module: "commonjs",
      target: "es6",
      outDir: "dist",
      rootDir: ".",
      sourceMap: true,
      strict: false
    }
  };

  project.createSourceFile("tsconfig.json", JSON.stringify(tsConfigContents), {
    overwrite: true
  });
}