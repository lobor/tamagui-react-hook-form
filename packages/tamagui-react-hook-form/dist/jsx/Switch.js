import { Switch, withStaticProperties } from "tamagui";
import { withController } from "./withController";
const { Thumb } = Switch;
const SwitchControlled = withStaticProperties(
  withController(Switch, {
    onChange: "onCheckedChange",
    value: "checked"
  }),
  { Thumb }
);
export {
  SwitchControlled
};
//# sourceMappingURL=Switch.js.map
