import * as vscode from "vscode";
import { layouts } from "./definitions/constants";
import { Layouts } from "./definitions/types";

class LayoutFactory {
  public static getLayout() {
    const layout = vscode.workspace
      .getConfiguration("vs-code-window-manager")
      .get("layout") as Layouts;
    return layouts[layout];
  }
}

export { LayoutFactory };
