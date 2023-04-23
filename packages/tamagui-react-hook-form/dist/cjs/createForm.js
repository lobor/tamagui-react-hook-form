var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createForm_exports = {};
__export(createForm_exports, {
  createForm: () => createForm
});
module.exports = __toCommonJS(createForm_exports);
var import_tamagui = require("tamagui");
var import_withController = require("./withController");
var import_Value = require("./Value");
var import_Form = require("./Form");
var import_Field = require("./Field");
var import_Message = require("./Message");
var import_Trigger = require("./Trigger");
const staticProperties = {
  Checkbox: {
    component: import_tamagui.Checkbox,
    mapProps: { onChange: "onCheckedChange", value: "checked" }
  },
  Input: {
    component: import_tamagui.Input,
    mapProps: { onChange: "onChangeText" }
  },
  RadioGroup: {
    component: import_tamagui.RadioGroup,
    mapProps: { onChange: "onValueChange" }
  },
  Select: {
    component: import_tamagui.Select,
    mapProps: { onChange: "onValueChange" }
  },
  Slider: {
    component: import_tamagui.Slider,
    mapProps: { onChange: "onValueChange" }
  },
  Switch: {
    component: import_tamagui.Switch,
    mapProps: {
      onChange: "onCheckedChange",
      value: "checked"
    }
  },
  TextArea: {
    component: import_tamagui.TextArea,
    mapProps: { onChange: "onChangeText" }
  },
  Value: {
    component: import_Value.Value,
    mapProps: {}
  },
  Field: {
    component: import_Field.FieldControlled,
    mapProps: {}
  },
  Message: {
    component: import_Message.Message,
    mapProps: {}
  }
};
function createForm() {
  const properties = {
    ...staticProperties
  };
  const extendsComponentControlled = Object.keys(properties).reduce((acc, key) => {
    const { component, mapProps } = properties[key];
    acc[key] = (0, import_tamagui.withStaticProperties)(
      {
        ...component
      },
      (0, import_withController.withController)(component, mapProps)
    );
    return acc;
  }, {});
  return (0, import_tamagui.withStaticProperties)(import_Form.FormComponent, { ...extendsComponentControlled, Trigger: import_Trigger.Trigger });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createForm
});
//# sourceMappingURL=createForm.js.map
