import { Tall } from "../tall";
import { Wide } from "../wide";
import { Layouts } from "./types";

const layouts = {
  [Layouts.tall]: new Tall(),
  [Layouts.wide]: new Wide(),
};

export { layouts };
