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
  moveActiveEditorGroupDown = "workbench.action.moveActiveEditorGroupDown",
  moveActiveEditorGroupUp = "workbench.action.moveActiveEditorGroupUp",
  moveActiveEditorGroupLeft = "workbench.action.moveActiveEditorGroupLeft",
  moveActiveEditorGroupRight = "workbench.action.moveActiveEditorGroupRight",
  openPreviousEditorInGroup = "workbench.action.previousEditorInGroup",
}

enum Orientation {
  vertical = 0,
  horizontal = 1,
}

enum ConfigurationOption {
  layout = "layout",
}

export { VscodeCommand, ConfigurationOption, Orientation };
