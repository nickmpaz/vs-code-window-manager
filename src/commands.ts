import * as vscode from "vscode";
import { LayoutFactory } from "./layouts/layoutFactory";

const commands = {
  newEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).newEditorGroup(),
  closeEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).closeEditorGroup(),
  focusNextEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).focusNextEditorGroup(),
  focusPreviousEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).focusPreviousEditorGroup(),
  swapNextEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).swapNextEditorGroup(),
  swapPreviousEditorGroup: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).swapPreviousEditorGroup(),
  toggleEditorGroupSpotlight: (context: vscode.ExtensionContext) =>
    LayoutFactory.getLayout(context).toggleEditorGroupSpotlight(),
};

export { commands };
