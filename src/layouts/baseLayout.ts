import * as vscode from "vscode";
import { extensionNamespace } from "../definitions/constants";
import { maxEditorGroups } from "./definitions/constants";
import {
  GlobalStateKey,
  Orientation,
  VscodeCommand,
} from "./definitions/types";

// moveActiveEditor - Move the active editor by tabs or groups

// Active editor move argument - Argument Properties:
// 'to': String value providing where to move.
// 'by': String value providing the unit for move (by tab or by group).
// 'value': Number value providing how many positions or an absolute position to move.

abstract class BaseLayout {
  context: vscode.ExtensionContext;

  public abstract setLayout(): Promise<void>;

  public constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  public getCommandLock(): number {
    return (
      this.context.globalState.get(
        `${extensionNamespace}.${GlobalStateKey.commandLock}`
      ) ?? 0
    );
  }

  public setCommandLock(time: number): Thenable<void> {
    return this.context.globalState.update(
      `${extensionNamespace}.${GlobalStateKey.commandLock}`,
      time
    );
  }

  public async newEditorGroup() {
    const { all: tabGroups } = vscode.window.tabGroups;
    if (tabGroups.length >= maxEditorGroups) {
      return;
    }
    await vscode.commands.executeCommand(VscodeCommand.splitEditorDown);
    await this.setLayout();
  }

  public async closeEditorGroup() {
    await vscode.commands.executeCommand(VscodeCommand.closeEditorGroup);
    await this.setLayout();
  }

  public async focusNextEditorGroup() {
    await vscode.commands.executeCommand(VscodeCommand.focusNextEditorGroup);
  }

  public async focusPreviousEditorGroup() {
    await vscode.commands.executeCommand(
      VscodeCommand.focusPreviousEditorGroup
    );
  }

  public async swapNextEditorGroup() {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }
    const { viewColumn } = vscode.window.activeTextEditor ?? {};
    const isLastEditorGroup = tabGroups.length === viewColumn;

    await vscode.commands.executeCommand(
      isLastEditorGroup
        ? VscodeCommand.moveEditorToFirstGroup
        : VscodeCommand.moveEditorToNextGroup
    );
    await vscode.commands.executeCommand(
      VscodeCommand.openPreviousEditorInGroup
    );
    await vscode.commands.executeCommand(
      isLastEditorGroup
        ? VscodeCommand.moveEditorToLastGroup
        : VscodeCommand.moveEditorToPreviousGroup
    );
    await vscode.commands.executeCommand(VscodeCommand.focusNextEditorGroup);
  }

  public async swapPreviousEditorGroup() {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }
    const { viewColumn } = vscode.window.activeTextEditor ?? {};
    const isFirstEditorGroup = viewColumn === 1;

    await vscode.commands.executeCommand(
      isFirstEditorGroup
        ? VscodeCommand.moveEditorToLastGroup
        : VscodeCommand.moveEditorToPreviousGroup
    );
    await vscode.commands.executeCommand(
      VscodeCommand.openPreviousEditorInGroup
    );
    await vscode.commands.executeCommand(
      isFirstEditorGroup
        ? VscodeCommand.moveEditorToFirstGroup
        : VscodeCommand.moveEditorToNextGroup
    );
    await vscode.commands.executeCommand(
      VscodeCommand.focusPreviousEditorGroup
    );
  }

  public async toggleEditorGroupSpotlight() {
    await vscode.commands.executeCommand(VscodeCommand.toggleEditorWidths);
  }
}

export { BaseLayout };
