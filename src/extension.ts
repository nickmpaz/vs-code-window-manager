import * as vscode from "vscode";
import { extensionNamespace } from "./definitions/constants";
import { commands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  for (const [name, action] of Object.entries(commands)) {
    vscode.commands.registerCommand(`${extensionNamespace}.${name}`, () =>
      action(context)
    );
  }
}

export function deactivate() {}
