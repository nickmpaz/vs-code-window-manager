import * as vscode from "vscode";
import { configurationNamespace, layouts } from "./definitions/constants";
import { ConfigurationOption } from "./definitions/types";

class LayoutFactory {
  public static getLayout() {
    const configuredLayout = vscode.workspace
      .getConfiguration(configurationNamespace)
      .get(ConfigurationOption.layout) as string;

    return layouts?.[configuredLayout] ?? Object.values(layouts)[0];
  }
}

export { LayoutFactory };
