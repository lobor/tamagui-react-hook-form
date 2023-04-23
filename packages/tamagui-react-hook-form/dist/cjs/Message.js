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
var Message_exports = {};
__export(Message_exports, {
  Message: () => Message
});
module.exports = __toCommonJS(Message_exports);
var import_tamagui = require("tamagui");
var import_react = require("react");
var import_react_hook_form = require("react-hook-form");
var import_fieldContext = require("./fieldContext");
const MessageText = (0, import_tamagui.styled)(import_tamagui.SizableText, {
  name: "FormMessageText",
  color: "red"
});
const Message = ({ name: nameProps, ...props }) => {
  var _a;
  const { name: nameField } = (0, import_fieldContext.useField)();
  const name = nameProps ?? nameField;
  const { control } = (0, import_react_hook_form.useFormContext)();
  const { errors } = (0, import_react_hook_form.useFormState)({ control, name });
  return (0, import_react.useMemo)(
    () => {
      var _a2, _b;
      return ((_a2 = errors[name]) == null ? void 0 : _a2.message) ? <MessageText {...props}>{(_b = errors[name]) == null ? void 0 : _b.message}</MessageText> : null;
    },
    [(_a = errors[name]) == null ? void 0 : _a.message]
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Message
});
//# sourceMappingURL=Message.js.map
