import * as vscode from "vscode";
import { BaseLayout } from "./baseLayout";
import {
  chunkArray,
  getActiveViewColumn,
  getNumEditorGroups,
  getNumGridColumns,
} from "./definitions/helpers";
import { Orientation, VscodeCommand } from "./definitions/types";

class Grid extends BaseLayout {
  public async setLayout(): Promise<void> {
    const numEditorGroups = getNumEditorGroups();

    if (numEditorGroups <= 1) {
      return;
    }

    const numGridColumns = getNumGridColumns();
    const grid = chunkArray<{}>(
      new Array(numEditorGroups).fill({}),
      numGridColumns
    );
    const gridLayout = grid.map((gridRow: {}[]) => ({
      groups: gridRow,
    }));

    await vscode.commands.executeCommand(VscodeCommand.setEditorLayout, {
      orientation: Orientation.horizontal,
      groups: gridLayout,
    });
  }

  public isActiveGroupAtStartOfGroups(): boolean {
    const numGridColumns = getNumGridColumns();
    const activeViewColumn = getActiveViewColumn();
    if (!activeViewColumn) {
      throw new Error("No active view column");
    }
    return activeViewColumn % numGridColumns === 1;
  }

  public isActiveGroupAtEndOfGroups(): boolean {
    const numGridColumns = getNumGridColumns();
    const activeViewColumn = getActiveViewColumn();
    if (!activeViewColumn) {
      throw new Error("No active view column");
    }
    return activeViewColumn % numGridColumns === 0;
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

export { Grid };
