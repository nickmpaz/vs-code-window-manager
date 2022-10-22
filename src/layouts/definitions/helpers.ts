import * as vscode from "vscode";

const getActiveViewColumn = (): number | undefined => {
  const { viewColumn } = vscode.window.activeTextEditor ?? {};
  return viewColumn;
};

const getNumEditorGroups = (): number => {
  const { all: tabGroups } = vscode.window.tabGroups;
  return tabGroups.length;
};

const getNumGridColumns = () => Math.ceil(Math.sqrt(getNumEditorGroups()));

const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
  return arr.length > chunkSize
    ? [arr.slice(0, chunkSize), ...chunkArray(arr.slice(chunkSize), chunkSize)]
    : [arr];
};

export {
  getActiveViewColumn,
  getNumEditorGroups,
  getNumGridColumns,
  chunkArray,
};
