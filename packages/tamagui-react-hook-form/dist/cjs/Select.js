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
var Select_exports = {};
__export(Select_exports, {
  SelectControlled: () => SelectControlled
});
module.exports = __toCommonJS(Select_exports);
var import_tamagui = require("tamagui");
var import_withController = require("./withController");
const {
  Trigger,
  Value,
  Content,
  Viewport,
  Group,
  Item,
  ItemText,
  ItemIndicator,
  ScrollUpButton,
  ScrollDownButton,
  Label,
  Sheet,
  Adapt,
  Icon
} = import_tamagui.Select;
const SelectControlled = (0, import_tamagui.withStaticProperties)(
  (0, import_withController.withController)(import_tamagui.Select, { onChange: "onValueChange" }),
  {
    Trigger,
    Value,
    Content,
    Viewport,
    Group,
    Item,
    Label,
    ItemText,
    ItemIndicator,
    ScrollUpButton,
    ScrollDownButton,
    Sheet,
    Adapt,
    Icon
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SelectControlled
});
//# sourceMappingURL=Select.js.map
