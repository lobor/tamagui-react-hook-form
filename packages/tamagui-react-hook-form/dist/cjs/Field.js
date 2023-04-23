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
var Field_exports = {};
__export(Field_exports, {
  FieldControlled: () => FieldControlled
});
module.exports = __toCommonJS(Field_exports);
var import_tamagui = require("tamagui");
var import_fieldContext = require("./fieldContext");
function FieldControlled({
  children,
  name,
  ...props
}) {
  return <import_fieldContext.fieldContext.Provider value={{ name }}><import_tamagui.YStack {...props}>{children}</import_tamagui.YStack></import_fieldContext.fieldContext.Provider>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldControlled
});
//# sourceMappingURL=Field.js.map
