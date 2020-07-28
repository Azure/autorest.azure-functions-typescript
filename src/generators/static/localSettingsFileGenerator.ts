import { Project } from "ts-morph";

export function generateLocalSettingsJson(project: Project) {
  const localSettingsContents = {
    IsEncrypted: false,
    Values: {
      AzureWebJobsStorage: "",
      FUNCTIONS_WORKER_RUNTIME: "node"
    }
  };

  project.createSourceFile("local.settings.json", JSON.stringify(localSettingsContents), {
    overwrite: true
  });
}