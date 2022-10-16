import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";

class Tall extends BaseLayout {
  public async setLayout(): Promise<void> {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }

    await vscode.commands.executeCommand("vscode.setEditorLayout", {
      orientation: 0,
      groups: [
        { groups: [{}] },
        { groups: new Array(tabGroups.length - 1).fill({}) },
      ],
    });
	return
  }
}

export { Tall };
