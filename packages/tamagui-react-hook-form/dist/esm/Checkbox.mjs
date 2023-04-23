import { withStaticProperties, Checkbox } from "tamagui";
import { withController } from "./withController";
const { Indicator } = Checkbox;
const CheckboxControlled = withStaticProperties(
  withController(Checkbox, { onChange: "onCheckedChange" }),
  {
    Indicator
  }
);
export {
  CheckboxControlled
};
//# sourceMappingURL=Checkbox.mjs.map
