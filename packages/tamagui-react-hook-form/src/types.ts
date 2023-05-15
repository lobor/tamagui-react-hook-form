import type { FormProps as FormDefaultProps } from 'tamagui/types'
import { MutableRefObject, PropsWithChildren } from 'react'
import {
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

export type Merge<A extends Function, B> = A & B

export type WithController<
  TProps,
  TFieldValues extends FieldValues = FieldValues
> = React.ForwardRefRenderFunction<unknown, WithControllerProps<TProps, TFieldValues>>

export type FormProps<TFieldValues extends FieldValues = FieldValues> = PropsWithChildren<
  UseFormProps<TFieldValues> &
    Omit<FormDefaultProps, 'onSubmit'> & {
      onSubmit: SubmitHandler<TFieldValues>
      onChangeForm?: (form: UseFormReturn<TFieldValues>) => void
    }
>

export type WithControllerProps<TProps, TFieldValues extends FieldValues = FieldValues> = Omit<
  ControllerProps<TFieldValues, FieldPath<TFieldValues>>,
  'render' | 'control' | 'name'
> &
  Omit<TProps, 'name'> & {
    name?: FieldPath<TFieldValues>
  }

export type CustomFieldControlled<TProps> = {
  component: React.JSXElementConstructor<TProps>
  mapProps?: Partial<Record<keyof ControllerRenderProps, TProps>>
}

export type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<
  infer TProps
>
  ? TProps
  : TComponentOrTProps

export type ExtractStaticProperties<TProperties> = TProperties extends React.ComponentType &
  TProperties
  ? TProperties
  : {}
