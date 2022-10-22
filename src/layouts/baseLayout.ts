import * as vscode from "vscode";
import { maxEditorGroups } from "./definitions/constants";
import { getActiveViewColumn, getNumEditorGroups } from "./definitions/helpers";
import { VscodeCommand } from "./definitions/types";

abstract class BaseLayout {
  context: vscode.ExtensionContext;

  public abstract setLayout(): Promise<void>;

  public abstract isActiveGroupAtStartOfGroups(): boolean;

  public abstract isActiveGroupAtEndOfGroups(): boolean;

  public abstract swapNextWithinGroups(): Promise<void>;

  public abstract swapPreviousWithinGroups(): Promise<void>;

  public constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  public isActiveEditorGroupFirst() {
    return getActiveViewColumn() === 1;
  }

  public isActiveEditorGroupLast() {
    return getActiveViewColumn() === getNumEditorGroups();
  }

  public async newEditorGroup() {
    if (getNumEditorGroups() >= maxEditorGroups) {
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
    if (this.isActiveEditorGroupLast()) {
      return;
    }
    await vscode.commands.executeCommand(VscodeCommand.focusNextEditorGroup);
  }

  public async focusPreviousEditorGroup() {
    if (this.isActiveEditorGroupFirst()) {
      return;
    }
    await vscode.commands.executeCommand(
      VscodeCommand.focusPreviousEditorGroup
    );
  }

  public async swapNextEditorGroup() {
    if (this.isActiveEditorGroupLast()) {
      return;
    }

    this.isActiveGroupAtEndOfGroups()
      ? await this.swapNextAcrossGroups()
      : await this.swapNextWithinGroups();
  }

  public async swapPreviousEditorGroup() {
    if (this.isActiveEditorGroupFirst()) {
      return;
    }

    this.isActiveGroupAtStartOfGroups()
      ? await this.swapPreviousAcrossGroups()
      : await this.swapPreviousWithinGroups();
  }

  public async toggleEditorGroupSpotlight() {
    await vscode.commands.executeCommand(VscodeCommand.toggleEditorWidths);
  }

  public async swapNextAcrossGroups(): Promise<void> {
    await vscode.commands.executeCommand(VscodeCommand.moveEditorToNextGroup);
    await vscode.commands.executeCommand(
      VscodeCommand.openPreviousEditorInGroup
    );
    await vscode.commands.executeCommand(
      VscodeCommand.moveEditorToPreviousGroup
    );
    await vscode.commands.executeCommand(VscodeCommand.focusNextEditorGroup);
  }

  public async swapPreviousAcrossGroups(): Promise<void> {
    await vscode.commands.executeCommand(
      VscodeCommand.moveEditorToPreviousGroup
    );
    await vscode.commands.executeCommand(
      VscodeCommand.openPreviousEditorInGroup
    );
    await vscode.commands.executeCommand(VscodeCommand.moveEditorToNextGroup);
    await vscode.commands.executeCommand(
      VscodeCommand.focusPreviousEditorGroup
    );
  }
}

export { BaseLayout };
