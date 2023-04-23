import { Form, FormProps as FormDefaultProps, InputProps, RadioGroup, RadioGroupProps, Select, SelectProps, Slider, SliderProps, Switch, SwitchProps, TextAreaProps } from 'tamagui/types';
import { MutableRefObject, PropsWithChildren } from 'react';
import { ControllerProps, FieldPath, FieldValues, SubmitHandler, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FieldControlled } from './Field';
import { MessageProps } from './Message';
import { ValueProps } from './Value';
export type Merge<A extends Function, B> = A & B;
export type WithController<TProps, TFieldValues extends FieldValues = FieldValues> = React.ForwardRefRenderFunction<unknown, WithControllerProps<TProps, TFieldValues>>;
export type FRef<TFieldValues extends FieldValues = FieldValues> = UseFormReturn<TFieldValues>;
export type FormProps<TFieldValues extends FieldValues = FieldValues> = PropsWithChildren<UseFormProps<TFieldValues> & Omit<FormDefaultProps, 'onSubmit'> & {
    onSubmit: SubmitHandler<TFieldValues>;
    fRef?: MutableRefObject<FRef<TFieldValues> | null>;
}>;
type ExtractStaticProps<El> = Omit<El, '$$typeof'>;
export type StaticProps<TFieldValues extends FieldValues = FieldValues> = {
    Input: WithController<InputProps, TFieldValues>;
    RadioGroup: WithController<RadioGroupProps, TFieldValues> & ExtractStaticProps<typeof RadioGroup>;
    Select: WithController<SelectProps, TFieldValues> & ExtractStaticProps<typeof Select>;
    Slider: WithController<SliderProps, TFieldValues> & ExtractStaticProps<typeof Slider>;
    Switch: WithController<SwitchProps, TFieldValues> & ExtractStaticProps<typeof Switch>;
    TextArea: WithController<TextAreaProps, TFieldValues>;
    Trigger: typeof Form.Trigger;
    Message: WithController<MessageProps, TFieldValues>;
    Value: WithController<ValueProps, TFieldValues>;
    Field: typeof FieldControlled<TFieldValues>;
};
export type WithControllerProps<TProps, TFieldValues extends FieldValues = FieldValues> = Omit<ControllerProps<TFieldValues, FieldPath<TFieldValues>>, 'render' | 'control' | 'name'> & Omit<TProps, 'name'> & {
    name?: FieldPath<TFieldValues>;
};
export {};
//# sourceMappingURL=types.d.ts.map