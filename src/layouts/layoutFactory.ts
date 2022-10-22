import * as vscode from "vscode";
import { configurationNamespace, layouts } from "./definitions/constants";
import { ConfigurationOption, Layout } from "./definitions/types";

class LayoutFactory {
  public static getLayout() {
    const configuredLayout = vscode.workspace
      .getConfiguration(configurationNamespace)
      .get(ConfigurationOption.layout) as Layout;
    return layouts[configuredLayout];
  }
}

export { LayoutFactory };
