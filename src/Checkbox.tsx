import { Checkbox } from "@tamagui/checkbox";
import { withStaticProperties } from "@tamagui/web";

import { withController } from "./withController";

const { Indicator } = Checkbox;

const staticProp = {
  Indicator,
};

export const CheckboxControlled = withStaticProperties(
  // TODO remove "as any"
  withController(Checkbox, { onChange: "onCheckedChange" }) as any,
  staticProp
);
