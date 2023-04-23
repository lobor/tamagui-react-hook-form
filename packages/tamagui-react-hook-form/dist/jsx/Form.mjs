import { FormProvider, useForm } from "react-hook-form";
import { useIsomorphicLayoutEffect, Form as FormDefault } from "tamagui";
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
  const form = useForm({
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
  useIsomorphicLayoutEffect(() => {
    if (fRef) {
      fRef.current = form;
    }
  }, [form]);
  return <FormProvider {...form}><FormDefault onSubmit={form.handleSubmit(onSubmit)} {...formProps} children={children} /></FormProvider>;
}
export {
  FormComponent
};
//# sourceMappingURL=Form.mjs.map
