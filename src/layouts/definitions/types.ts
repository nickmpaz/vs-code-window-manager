enum VscodeCommand {
  focusNextEditorGroup = "workbench.action.focusNextGroup",
  focusPreviousEditorGroup = "workbench.action.focusPreviousGroup",
  focusFirstEditorGroup = "workbench.action.focusFirstGroup",
  closeActiveEditor = "workbench.action.closeActiveEditor",
  closeEditorGroup = "workbench.action.closeEditorsAndGroup",
  splitEditorDown = "workbench.action.splitEditorDown",
  setEditorLayout = "vscode.setEditorLayout",
  toggleEditorWidths = "workbench.action.toggleEditorWidths",
  moveEditorToNextGroup = "workbench.action.moveEditorToNextGroup",
  moveEditorToPreviousGroup = "workbench.action.moveEditorToPreviousGroup",
  moveEditorToFirstGroup = "workbench.action.moveEditorToFirstGroup",
  moveEditorToLastGroup = "workbench.action.moveEditorToLastGroup",
  openPreviousEditorInGroup = "workbench.action.previousEditorInGroup",
}

enum Orientation {
  vertical = 0,
  horizontal = 1,
}

enum ConfigurationOption {
  layout = "layout",
}

enum GlobalStateKey {
  commandLock = "commandLock",
  commandTime = "commandTime",
}

export { VscodeCommand, ConfigurationOption, Orientation, GlobalStateKey };
