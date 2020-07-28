import { Project } from "ts-morph";

export function generateHostJson(project: Project) {
  const hostJsonContents = {
    version: "2.0",
    logging: {
      applicationInsights: {
        samplingSettings: {
          isEnabled: true,
          excludedTypes: "Request"
        }
      }
    },
    extensionBundle: {
      id: "Microsoft.Azure.Functions.ExtensionBundle",
      version: "[1.*, 2.0.0)"
    }
  };

  project.createSourceFile("host.json", JSON.stringify(hostJsonContents), {
    overwrite: true
  });
}