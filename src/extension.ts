import * as vscode from "vscode";
import { LayoutFactory } from "./layouts/layoutFactory";
import { commandPrefix, commands } from "./definitions/constants";

export function activate(context: vscode.ExtensionContext) {
  commands.forEach((command) =>
    vscode.commands.registerCommand(`${commandPrefix}.${command}`, () =>
      LayoutFactory.getLayout()[command]()
    )
  );
}

export function deactivate() {}
