// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutoRestExtension,
  AutorestExtensionHost,
  startSession
} from "@autorest/extension-base";
import { generateTypeScriptLibrary } from "./typescriptGenerator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";

export async function processRequest(host: AutorestExtensionHost) {
  try {
    const session = await startSession<CodeModel>(
      host,
      codeModelSchema,
      undefined
    );
    const start = Date.now();
    await generateTypeScriptLibrary(session.model, host);
    session.log(`Autorest.Typescript took ${Date.now() - start}ms`);
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.Add("typescript", processRequest);
  await pluginHost.Run();
}

main();
