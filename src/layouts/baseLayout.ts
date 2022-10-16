import * as vscode from "vscode";

abstract class BaseLayout {
  public abstract setLayout(): Promise<void>;

  public async newEditorGroup() {
    await vscode.commands.executeCommand("workbench.action.splitEditorDown");
    await this.setLayout();
  }

  public async closeEditorGroup() {
    await vscode.commands.executeCommand(
      "workbench.action.closeEditorsAndGroup"
    );
    await this.setLayout();
  }

  public async focusNextEditorGroup() {
    await vscode.commands.executeCommand("workbench.action.focusNextGroup");
  }

  public async focusPreviousEditorGroup() {
    await vscode.commands.executeCommand("workbench.action.focusPreviousGroup");
  }

  public async swapNextEditorGroup() {
    const { document: activeDocument, viewColumn: activeViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand("workbench.action.closeActiveEditor");
    await vscode.commands.executeCommand("workbench.action.focusNextGroup");
    const { document: swappedDocument, viewColumn: swappedViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand("workbench.action.closeActiveEditor");

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
    await vscode.commands.executeCommand("workbench.action.closeActiveEditor");
    await vscode.commands.executeCommand("workbench.action.focusPreviousGroup");
    const { document: swappedDocument, viewColumn: swappedViewColumn } =
      vscode.window.activeTextEditor || {};
    await vscode.commands.executeCommand("workbench.action.closeActiveEditor");

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
    await vscode.commands.executeCommand("workbench.action.toggleEditorWidths");
  }
}

export { BaseLayout };
