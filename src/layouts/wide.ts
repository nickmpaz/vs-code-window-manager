import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";

class Wide extends BaseLayout {
  public async setLayout() {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }

    await vscode.commands.executeCommand("vscode.setEditorLayout", {
      orientation: 1,
      groups: [
        { groups: [{}] },
        { groups: new Array(tabGroups.length - 1).fill({}) },
      ],
    });
  }
}

export { Wide };
