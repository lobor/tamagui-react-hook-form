import { RadioGroup, withStaticProperties } from "tamagui";
import { withController } from "./withController";
const { Item, Indicator } = RadioGroup;
const RadioGroupControlled = withStaticProperties(
  withController(RadioGroup, {
    onChange: "onValueChange"
  }),
  { Item, Indicator }
);
export {
  RadioGroupControlled
};
//# sourceMappingURL=RadioGroup.js.map
