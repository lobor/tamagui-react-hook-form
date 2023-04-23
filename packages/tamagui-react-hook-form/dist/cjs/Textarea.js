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
var Textarea_exports = {};
__export(Textarea_exports, {
  TextAreaControlled: () => TextAreaControlled
});
module.exports = __toCommonJS(Textarea_exports);
var import_tamagui = require("tamagui");
var import_withController = require("./withController");
const TextAreaControlled = (0, import_withController.withController)(import_tamagui.TextArea, { onChange: "onChangeText" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextAreaControlled
});
//# sourceMappingURL=Textarea.js.map