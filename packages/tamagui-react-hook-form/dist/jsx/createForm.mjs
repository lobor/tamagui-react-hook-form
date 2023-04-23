import {
  withStaticProperties,
  Checkbox,
  Input,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextArea
} from "tamagui";
import { withController } from "./withController";
import { Value } from "./Value";
import { FormComponent } from "./Form";
import { FieldControlled } from "./Field";
import { Message } from "./Message";
import { Trigger } from "./Trigger";
const staticProperties = {
  Checkbox: {
    component: Checkbox,
    mapProps: { onChange: "onCheckedChange", value: "checked" }
  },
  Input: {
    component: Input,
    mapProps: { onChange: "onChangeText" }
  },
  RadioGroup: {
    component: RadioGroup,
    mapProps: { onChange: "onValueChange" }
  },
  Select: {
    component: Select,
    mapProps: { onChange: "onValueChange" }
  },
  Slider: {
    component: Slider,
    mapProps: { onChange: "onValueChange" }
  },
  Switch: {
    component: Switch,
    mapProps: {
      onChange: "onCheckedChange",
      value: "checked"
    }
  },
  TextArea: {
    component: TextArea,
    mapProps: { onChange: "onChangeText" }
  },
  Value: {
    component: Value,
    mapProps: {}
  },
  Field: {
    component: FieldControlled,
    mapProps: {}
  },
  Message: {
    component: Message,
    mapProps: {}
  }
};
function createForm() {
  const properties = {
    ...staticProperties
  };
  const extendsComponentControlled = Object.keys(properties).reduce((acc, key) => {
    const { component, mapProps } = properties[key];
    acc[key] = withStaticProperties(
      {
        ...component
      },
      withController(component, mapProps)
    );
    return acc;
  }, {});
  return withStaticProperties(FormComponent, { ...extendsComponentControlled, Trigger });
}
export {
  createForm
};
//# sourceMappingURL=createForm.mjs.map
