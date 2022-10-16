# vs-code-window-manager

This VS Code extension provides [dynamic tiling](https://en.wikipedia.org/wiki/Dynamic_window_manager) features on top of VS Code's [Editor Groups](https://code.visualstudio.com/docs/getstarted/userinterface#_editor-groups). In short, VS Code `vs-code-window-manager` manages the positions of your editors so that you don't have to. When you open a window it will automatically tile into the layout of your choice. VS Code Dynamic Layouts is inspired by tiling window managers like XMonad, DWM, and Awesome, and should feel familiar to those who use them.

## Layouts

VS Code Dynamic Layouts supports the following layouts.

### Tall

Your first window will be positioned on the left half of the screen, and the rest will be place in a column on the right half.

![feature X](https://raw.githubusercontent.com/nickmpaz/vs-code-window-manager/main/images/layout-tall.png)

### Wide

Your first window will be positioned on the top half of the screen, and the rest will be place in a row on the bottom half.

![feature X](https://raw.githubusercontent.com/nickmpaz/vs-code-window-manager/main/images/layout-wide.png)

## Features

### New Editor Group (vs-code-window-manager.newEditorGroup)

- Open a new Editor Group into your layout.
- Default keybind: `ctrl+space`

### Close Editor Group (vs-code-window-manager.closeEditorGroup)

- Close the active Editor Group.
- Default keybind: `ctrl+q`

### Focus Next Editor Group (vs-code-window-manager.focusNextEditorGroup)

- Focus the next Editor Group in your layout.
- Default keybind: `ctrl+j`

### Focus Previous Editor Group (vs-code-window-manager.focusPreviousEditorGroup)

- Focus the previous Editor Group in your layout.
- Default keybind: `ctrl+k`

### Swap Next Editor Group (vs-code-window-manager.swapNextEditorGroup)

- Swap the active Editor Group with the next group in your layout.
- Default keybind: `ctrl+shift+j`

### Swap Previous Editor Group (vs-code-window-manager.swapPreviousEditorGroup)

- Swap the active Editor Group with the previous group in your layout.
- Default keybind: `ctrl+shift+k`

### Toggle Editor Group Spotlight (vs-code-window-manager.toggleEditorGroupSpotlight)

- Toggle spotlight mode. In spotlight mode, the active Editor Group's size will be increased.
- Default keybind: `ctrl+m`

## Requirements

For this extension to work, the `workbench.editor.closeEmptyGroups` setting must be set to `false`.

## Extension Settings

This extension contributes the following settings:

- `vs-code-window-manager.enable`: Enable/disable this extension.
- `vs-code-window-manager.layout`: The layout to use.

## Known Issues

- When swapping editor groups, your cursor position may change

## Release Notes

### 1.0.0

- Initial release of `vs-code-window-manager`

---
