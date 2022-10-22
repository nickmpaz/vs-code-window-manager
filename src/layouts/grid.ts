import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
import { Orientation, VscodeCommand } from "./definitions/types";

class Grid extends BaseLayout {
  private static chunkArray(arr: unknown[], chunkSize: number): any {
    return arr.length > chunkSize
      ? [
          arr.slice(0, chunkSize),
          ...Grid.chunkArray(arr.slice(chunkSize), chunkSize),
        ]
      : [arr];
  }

  public async setLayout(): Promise<void> {
    const { all: tabGroups } = vscode.window.tabGroups;

    if (tabGroups.length <= 1) {
      return;
    }

    const numRows = Math.ceil(Math.sqrt(tabGroups.length));
    const grid: {}[][] = Grid.chunkArray(
      new Array(tabGroups.length).fill({}),
      numRows
    );
    const gridLayout = grid.map((gridRow: {}[]) => ({
      groups: gridRow,
    }));

    await vscode.commands.executeCommand(VscodeCommand.setEditorLayout, {
      orientation: Orientation.horizontal,
      groups: gridLayout,
    });
  }
}

export { Grid };
