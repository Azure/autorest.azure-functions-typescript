import { Project } from "ts-morph";

export function generateProxiesJson(project: Project) {
  const proxyContents = {
    "$schema": "http://json.schemastore.org/proxies",
    "proxies": {}
  };

  project.createSourceFile("proxies.json", JSON.stringify(proxyContents), {
    overwrite: true
  });
}