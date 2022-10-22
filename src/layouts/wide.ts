import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
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
}

export { Wide };
