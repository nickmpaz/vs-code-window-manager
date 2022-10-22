import { Grid } from "../grid";
import { Tall } from "../tall";
import { Wide } from "../wide";

const layouts = {
  tall: new Tall(),
  wide: new Wide(),
  grid: new Grid(),
};

const configurationNamespace = "vs-code-window-manager";

const maxEditorGroups = 16;

export { layouts, configurationNamespace, maxEditorGroups };
