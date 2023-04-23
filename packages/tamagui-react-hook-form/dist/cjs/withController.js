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
var withController_exports = {};
__export(withController_exports, {
  withController: () => withController
});
module.exports = __toCommonJS(withController_exports);
var import_react = require("react");
var import_react_hook_form = require("react-hook-form");
var import_fieldContext = require("./fieldContext");
var import_tamagui = require("tamagui");
function withController(Component, mapProps) {
  return (0, import_react.forwardRef)(function controlled(props, ref) {
    const { control } = (0, import_react_hook_form.useFormContext)();
    const { name: nameContext } = (0, import_fieldContext.useField)();
    const { name, rules, shouldUnregister, defaultValue, ...propsComponent } = props;
    return <import_react_hook_form.Controller
      control={control}
      name={name ?? nameContext}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref: innerRef, ...field }, ...other }) => {
        const propsMapped = Object.keys(field).reduce((acc, keyFrom) => {
          const keyTo = mapProps[keyFrom];
          const propFrom = field[keyFrom];
          acc[keyTo ?? keyFrom] = (keyTo == null ? void 0 : keyTo.match(/^on/g)) ? (0, import_tamagui.composeEventHandlers)(propFrom, props[keyTo], { checkDefaultPrevented: false }) : propFrom;
          return acc;
        }, {});
        return <Component ref={innerRef} {...propsComponent} {...propsMapped} />;
      }}
    />;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  withController
});
//# sourceMappingURL=withController.js.map
