import { Grid } from "../grid";
import { Tall } from "../tall";
import { Wide } from "../wide";

const layouts: Record<string, typeof Tall | typeof Wide | typeof Grid> = {
  tall: Tall,
  wide: Wide,
  grid: Grid,
};

const maxEditorGroups = 16;

export { layouts, maxEditorGroups };
