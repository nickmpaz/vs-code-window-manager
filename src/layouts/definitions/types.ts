enum VscodeCommand {
  focusNextEditorGroup = "workbench.action.focusNextGroup",
  focusPreviousEditorGroup = "workbench.action.focusPreviousGroup",
  closeActiveEditor = "workbench.action.closeActiveEditor",
  closeEditorGroup = "workbench.action.closeEditorsAndGroup",
  splitEditorDown = "workbench.action.splitEditorDown",
  setEditorLayout = "vscode.setEditorLayout",
  toggleEditorWidths = "workbench.action.toggleEditorWidths",
}

enum Orientation {
  vertical = 0,
  horizontal = 1,
}

enum ConfigurationOption {
  layout = "layout",
}

export { VscodeCommand, ConfigurationOption, Orientation };
