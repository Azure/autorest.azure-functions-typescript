# OpenAPI Code Generator for Azure Functions (TypeScript) 

## Simple AutoRest Extension

A simple AutoRest extension that can be used as a template for or documentation about writing such extensions.
Since this a TypeScript project, we distinguish between language agnostic and language dependent requirements.

## Usage

To use the prod version of the plugin, please use it through `autorest`. Please [install autorest](https://github.com/Azure/autorest/blob/master/docs/installing-autorest.md) to use `autorest.azure-functions-typescript`.

```bash
autorest  --azure-functions-typescript \
          --input-file:path/to/specs.json \
          --output-folder:where/to/generate/typescript-azure-function \
          --no-namespace-folders:True \
          --version:3.0.6314
```

If you clone this repo, and want to use it to generate function apps, please use the following:

```bash
autorest  --use:where/this/repo/is/cloned/autorest.azure-functions-typescript \
          --input-file:path/to/specs.json \
          --output-folder:where/to/generate/typescript-azure-function \
          --no-namespace-folders:True
```

## Language Agnostic Requirements

More information about these can be found [here](https://github.com/Azure/autorest/tree/master/docs/developer), summary:

1. Specify the start command of the extension as the `start` script in the `package.json`
2. Implement the AutoRest extension protocol (here: handled by library, see below)
3. Hook up plugins into the AutoRest pipeline DAG, e.g.

### Autorest plugin configuration

- Please don't edit this section unless you're re-configuring how the azure-functions-python extension plugs in to AutoRest
AutoRest needs the below config to pick this up as a plug-in - see [AutoRest-extension.md](https://github.com/Azure/autorest/blob/master/docs/developer/architecture/AutoRest-extension.md) for more information.

```yaml

version: 3.0.6314
use-extension:
  "@autorest/modelerfour": "4.15.419"

modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  # this will flatten modelers marked with 'x-ms-client-flatten'
  flatten-models: true
  # this will make the content-type parameter always specified
  always-create-content-type-parameter: true
  # enables parameter grouping via x-ms-parameter-grouping
  group-parameters: true

pipeline:
  typescript: # <- name of plugin
    input: modelerfour/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

typescript-scope/emitter:
  input-artifact: typescript-files

output-artifact: typescript-files
```

## Language Specific Requirements: TypeScript

For TypeScript projects, simply import [autorest-extension-base](https://github.com/olydis/autorest-extension-base) which implements the AutoRest extension protocol and offers a simple API to register plugins.
See [index.ts](./index.ts).

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
