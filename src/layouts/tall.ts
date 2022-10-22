import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
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
}

export { Tall };
