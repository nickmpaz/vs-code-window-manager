import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
import { getActiveViewColumn, getNumEditorGroups } from "./definitions/helpers";
import { Orientation, VscodeCommand } from "./definitions/types";

class Wide extends BaseLayout {
  public async setLayout() {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }

    await vscode.commands.executeCommand(VscodeCommand.setEditorLayout, {
      orientation: Orientation.horizontal,
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
      VscodeCommand.moveActiveEditorGroupRight
    );
  }

  public async swapPreviousWithinGroups(): Promise<void> {
    await vscode.commands.executeCommand(
      VscodeCommand.moveActiveEditorGroupLeft
    );
  }
}

export { Wide };
