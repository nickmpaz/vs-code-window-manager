import { Tall } from "./tall";
import { Wide } from "./wide";

class LayoutFactory {
  public static getLayout() {
    return new Wide();
  }
}

export { LayoutFactory };
