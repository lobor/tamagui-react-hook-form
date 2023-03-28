import {
  useIsomorphicLayoutEffect,
  withStaticProperties,
  Form as FormDefault,
} from "tamagui";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { CheckboxControlled } from "./Checkbox";
import { FieldControlled } from "./Field";
import { InputControlled } from "./Input";
import { Message } from "./Message";
import { RadioGroupControlled } from "./RadioGroup";
import { SelectControlled } from "./Select";
import { SliderControlled } from "./Slider";
import { SwitchControlled } from "./Switch";
import { TextAreaControlled } from "./Textarea";
import { FormProps, StaticProps } from "./types";
import { Value } from "./Value";

export function createForm<TValues extends FieldValues = FieldValues>(): ((
  params: FormProps<TValues>
) => JSX.Element) &
  StaticProps<TValues> {
  const defaultStaticProps = {
    Checkbox: CheckboxControlled,
    Input: InputControlled,
    RadioGroup: RadioGroupControlled,
    Select: SelectControlled,
    Slider: SliderControlled,
    Switch: SwitchControlled,
    TextArea: TextAreaControlled,
    Trigger: FormDefault.Trigger,
    Message: Message,
    Value: Value,
    Field: FieldControlled,
  } as StaticProps<TValues>;
  return withStaticProperties<
    (params: FormProps<TValues>) => JSX.Element,
    StaticProps<TValues>
  >(function FormComponent({
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
    const form = useForm<TValues>({
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
    });

    useIsomorphicLayoutEffect(() => {
      if (fRef) {
        fRef.current = form;
      }
    }, [form]);

    return (
      <FormProvider {...form}>
        <FormDefault
          onSubmit={form.handleSubmit(onSubmit)}
          {...formProps}
          children={children}
        />
      </FormProvider>
    );
  },
  defaultStaticProps);
}
