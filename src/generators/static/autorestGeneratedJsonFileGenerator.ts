import { Project } from "ts-morph";

export function generateAutorestGeneratedJson(project: Project) {
  const autorestGeneratedContents = {
    name: "@autorest/azure-functions-typescript",
    version: "0.2.0-preview"
  };

  project.createSourceFile(".autorest_generated.json", JSON.stringify(autorestGeneratedContents), {
    overwrite: true
  });
}