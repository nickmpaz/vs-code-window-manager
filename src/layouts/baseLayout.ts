import * as vscode from "vscode";
import { maxEditorGroups } from "./definitions/constants";
import { VscodeCommand } from "./definitions/types";

abstract class BaseLayout {
  public abstract setLayout(): Promise<void>;

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
    const { document: activeDocument, viewColumn: activeViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand(VscodeCommand.closeActiveEditor);
    await vscode.commands.executeCommand(VscodeCommand.focusNextEditorGroup);
    const { document: swappedDocument, viewColumn: swappedViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand(VscodeCommand.closeActiveEditor);

    if (
      !activeViewColumn ||
      !activeDocument ||
      !swappedViewColumn ||
      !swappedDocument
    ) {
      return;
    }
    await vscode.window.showTextDocument(
      swappedDocument,
      activeViewColumn,
      true
    );
    await vscode.window.showTextDocument(activeDocument, swappedViewColumn);
  }

  public async swapPreviousEditorGroup() {
    const { document: activeDocument, viewColumn: activeViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand(VscodeCommand.closeActiveEditor);
    await vscode.commands.executeCommand(
      VscodeCommand.focusPreviousEditorGroup
    );
    const { document: swappedDocument, viewColumn: swappedViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand(VscodeCommand.closeActiveEditor);

    if (
      !activeViewColumn ||
      !activeDocument ||
      !swappedViewColumn ||
      !swappedDocument
    ) {
      return;
    }
    await vscode.window.showTextDocument(
      swappedDocument,
      activeViewColumn,
      true
    );
    await vscode.window.showTextDocument(activeDocument, swappedViewColumn);
  }

  public async toggleEditorGroupSpotlight() {
    await vscode.commands.executeCommand(VscodeCommand.toggleEditorWidths);
  }
}

export { BaseLayout };
