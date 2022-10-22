import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
import { getActiveViewColumn, getNumEditorGroups } from "./definitions/helpers";
import { Orientation, VscodeCommand } from "./definitions/types";

class Tall extends BaseLayout {
  public async setLayout(): Promise<void> {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }

    await vscode.commands.executeCommand(VscodeCommand.setEditorLayout, {
      orientation: Orientation.vertical,
      groups: [
        { groups: [{}] },
        { groups: new Array(tabGroups.length - 1).fill({}) },
      ],
    });
  }

  public isActiveGroupAtStartOfGroups(): boolean {
    const activeViewColumn = getActiveViewColumn();
    return activeViewColumn === 1 || activeViewColumn === 2;
  }

  public isActiveGroupAtEndOfGroups(): boolean {
    const activeViewColumn = getActiveViewColumn();
    return activeViewColumn === 1 || activeViewColumn === getNumEditorGroups();
  }

  public async swapNextWithinGroups(): Promise<void> {
    await vscode.commands.executeCommand(
      VscodeCommand.moveActiveEditorGroupDown
    );
  }

  public async swapPreviousWithinGroups(): Promise<void> {
    await vscode.commands.executeCommand(VscodeCommand.moveActiveEditorGroupUp);
  }
}

export { Tall };
