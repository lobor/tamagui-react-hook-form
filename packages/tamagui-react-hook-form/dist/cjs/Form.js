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
var Form_exports = {};
__export(Form_exports, {
  FormComponent: () => FormComponent
});
module.exports = __toCommonJS(Form_exports);
var import_react_hook_form = require("react-hook-form");
var import_tamagui = require("tamagui");
function FormComponent({
  children,
  onSubmit,
  mode,
  reValidateMode,
  defaultValues,
  values,
  resetOptions,
  resolver,
  context,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  criteriaMode,
  delayError,
  fRef,
  ...formProps
}) {
  const form = (0, import_react_hook_form.useForm)({
    mode,
    reValidateMode,
    defaultValues,
    values,
    resetOptions,
    resolver,
    context,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    criteriaMode,
    delayError
  });
  (0, import_tamagui.useIsomorphicLayoutEffect)(() => {
    if (fRef) {
      fRef.current = form;
    }
  }, [form]);
  return <import_react_hook_form.FormProvider {...form}><import_tamagui.Form onSubmit={form.handleSubmit(onSubmit)} {...formProps} children={children} /></import_react_hook_form.FormProvider>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormComponent
});
//# sourceMappingURL=Form.js.map
