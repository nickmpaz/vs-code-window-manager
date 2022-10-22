import * as vscode from "vscode";
import { extensionNamespace } from "../definitions/constants";
import { layouts } from "./definitions/constants";
import { ConfigurationOption } from "./definitions/types";

class LayoutFactory {
  public static getLayout(context: vscode.ExtensionContext) {
    const configuredLayout = vscode.workspace
      .getConfiguration(extensionNamespace)
      .get(ConfigurationOption.layout) as string;

    const Layout = layouts?.[configuredLayout] ?? Object.values(layouts)[0];
    return new Layout(context);
  }
}

export { LayoutFactory };
