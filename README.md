# VS Code Window Manager

This VS Code extension provides [dynamic tiling](https://en.wikipedia.org/wiki/Dynamic_window_manager) features on top of VS Code's [Editor Groups](https://code.visualstudio.com/docs/getstarted/userinterface#_editor-groups). In short, VS Code `vs-code-window-manager` manages the positions of your editors so that you don't have to. When you open a window it will automatically tile into the layout of your choice. VS Code Dynamic Layouts is inspired by tiling window managers like XMonad, DWM, and Awesome, and should feel familiar to those who use them.

## Install

You can install this extension with the command `ext install npaz.vs-code-window-manager`.

Alternatively, you can install the extension by searching for `vs-code-window-manger` in the Extensions tab.

## Requirements

This extension requires certain settings to work. In your `settings.json`:

```
{
	"workbench.editor.closeEmptyGroups": false,
}
```

If you use the VS Code Vim extension, you will also need:

```
{
	vim.handleKeys":{
		"<C-j>": false,
		"<C-k>": false,
		"<C-space>": false,
		"<C-q>": false,
		"<C-m>": false
	},
}
```

## Layouts

VS Code Dynamic Layouts supports the following layouts.

### Tall

Your first window will be positioned on the left half of the screen, and the rest will be place in a column on the right half.

![feature X](https://raw.githubusercontent.com/nickmpaz/vs-code-window-manager/main/images/layout-tall.png)

### Wide

Your first window will be positioned on the top half of the screen, and the rest will be place in a row on the bottom half.

![feature X](https://raw.githubusercontent.com/nickmpaz/vs-code-window-manager/main/images/layout-wide.png)

### Grid

Your windows will be positioned in a grid ordered by column, then row

![feature X](https://raw.githubusercontent.com/nickmpaz/vs-code-window-manager/main/images/layout-grid.png)

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

## Extension Settings

This extension contributes the following settings:

- `vs-code-window-manager.layout`: The layout to use - defaults to `tall`.

## Known Issues

- When swapping editor groups, your cursor position may change
- Swapping editor groups very rapidly may bork your editors

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2022-10-23

### Changed

- Changelog format

## [1.1.0] - 2022-10-23

### Added

- `grid` layout

### Changed

- Updated swapping to be smoother

## [1.0.1] - 2022-10-16

### Added

- Configuration for layout type

## [1.0.0] - 2022-10-16

### Added

- Initial release
