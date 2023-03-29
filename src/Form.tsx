import {
  useIsomorphicLayoutEffect,
  withStaticProperties,
  Form as FormDefault,
} from "tamagui";
import {
  ControllerRenderProps,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";

import { CheckboxControlled } from "./Checkbox";
import { FieldControlled } from "./Field";
import { InputControlled } from "./Input";
import { Message } from "./Message";
import { RadioGroupControlled } from "./RadioGroup";
import { SelectControlled } from "./Select";
import { SliderControlled } from "./Slider";
import { SwitchControlled } from "./Switch";
import { TextAreaControlled } from "./Textarea";
import { withController } from "./withController";
import {
  FormProps,
  Merge,
  StaticProps,
  WithController,
  WithControllerProps,
} from "./types";
import { Value } from "./Value";

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
};

type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps;

type RecordExtend<
  TExtendsComponent extends {
    [key: string]: CustomFieldControlled<any>;
  } = {
    [key: string]: CustomFieldControlled<any>;
  },
  TValues extends FieldValues = FieldValues
> = {
  [key in keyof TExtendsComponent]: (
    props: WithControllerProps<
      Partial<ExtractProps<TExtendsComponent[key]["component"]>>,
      TValues
    >
  ) => JSX.Element;
};

type CustomFieldControlled<El> = {
  component: El;
  mapProps?: Partial<Record<keyof ControllerRenderProps, ExtractProps<El>>>;
};

export function createForm<
  TValues extends FieldValues,
  ExtendsComponent extends {
    [key: string]: CustomFieldControlled<any>;
  } = {
    [key: string]: CustomFieldControlled<any>;
  }
>(
  extendsComponent?: ExtendsComponent
): Merge<
  (params: FormProps<TValues>) => JSX.Element,
  StaticProps<TValues> & RecordExtend<ExtendsComponent, TValues>
> {
  const extendsComponentControlled = Object.keys(extendsComponent || {}).reduce(
    (acc, key) => {
      const { component, mapProps } = extendsComponent![key];
      acc[key] = withController(component, mapProps);
      return acc;
    },
    {}
  );
  return withStaticProperties(
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
    { ...defaultStaticProps, ...extendsComponentControlled }
  ) as Merge<
    (params: FormProps<TValues>) => JSX.Element,
    StaticProps<TValues> & RecordExtend<ExtendsComponent, TValues>
  >;
}
