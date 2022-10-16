import * as vscode from "vscode";
import { BaseLayout } from "./layouts/baseLayout";
import { LayoutFactory } from "./layouts/layoutFactory";

const commandPrefix = "vs-code-window-manager";

const commands: (keyof BaseLayout)[] = [
  "newEditorGroup",
  "closeEditorGroup",
  "focusNextEditorGroup",
  "focusPreviousEditorGroup",
  "swapNextEditorGroup",
  "swapPreviousEditorGroup",
  "toggleEditorGroupSpotlight",
];

export function activate(context: vscode.ExtensionContext) {
  commands.forEach((command) =>
    vscode.commands.registerCommand(`${commandPrefix}.${command}`, () =>
      LayoutFactory.getLayout()[command]()
    )
  );
}

export function deactivate() {}
