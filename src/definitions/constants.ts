import { BaseLayout } from "../layouts/baseLayout";

const commandPrefix = "vs-code-window-manager";

const commands: (keyof BaseLayout)[] = [
  "newEditorGroup",
  "closeEditorGroup",
  "focusNextEditorGroup",
  "focusPreviousEditorGroup",
  "swapNextEditorGroup",
  "swapPreviousEditorGroup",
  "toggleEditorGroupSpotlight",
];

export { commandPrefix, commands };
