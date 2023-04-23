import {
  withStaticProperties,
  Checkbox,
  Input,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextArea,
} from 'tamagui'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { withController } from './withController'
import { FormProps, WithControllerProps } from './types'
import { Value } from './Value'
import { FormComponent } from './Form'
import { FieldControlled } from './Field'
import { Message } from './Message'
import { Trigger } from './Trigger'

type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps>
  ? TProps
  : TComponentOrTProps

type Element<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps>
  ? React.ComponentType<TProps>
  : React.ComponentType<TComponentOrTProps>

type ExtractStaticProperties<TProperties> = TProperties extends React.ComponentType & TProperties
  ? TProperties
  : {}

type CustomFieldControlled<TProps> = {
  component: React.JSXElementConstructor<TProps>
  mapProps: Partial<Record<keyof ControllerRenderProps, TProps>>
}

type ReturnCreateForm<
  TValues extends FieldValues,
  TExtends extends {
    [key: string]: CustomFieldControlled<{}>
  }
> = Required<{
  [key in keyof TExtends]: ((
    props: WithControllerProps<Partial<ExtractProps<TExtends[key]['component']>>, TValues>
  ) => JSX.Element) &
    ExtractStaticProperties<TExtends[key]['component']>
}>

const staticProperties = {
  Checkbox: {
    component: Checkbox,
    mapProps: { onChange: 'onCheckedChange', value: "checked" },
  },
  Input: {
    component: Input,
    mapProps: { onChange: 'onChangeText' },
  },
  RadioGroup: {
    component: RadioGroup,
    mapProps: { onChange: 'onValueChange' },
  },
  Select: {
    component: Select,
    mapProps: { onChange: 'onValueChange' },
  },
  Slider: {
    component: Slider,
    mapProps: { onChange: 'onValueChange' },
  },
  Switch: {
    component: Switch,
    mapProps: {
      onChange: 'onCheckedChange',
      value: 'checked',
    },
  },
  TextArea: {
    component: TextArea,
    mapProps: { onChange: 'onChangeText' },
  },
  Value: {
    component: Value,
    mapProps: {},
  },
  Field: {
    component: FieldControlled,
    mapProps: {},
  },
  Message: {
    component: Message,
    mapProps: {},
  },
}

export function createForm<
  TValues extends FieldValues
>() {
  const properties = {
    ...staticProperties,
  }
  const extendsComponentControlled = (
    Object.keys(properties) as (keyof typeof properties)[]
  ).reduce<ReturnCreateForm<TValues, typeof properties>>((acc, key) => {
    const { component, mapProps } = properties[key]
    acc[key] = withStaticProperties(
      {
        ...component,
      } as any,
      withController(component as any, mapProps)
    )
    return acc
  }, {} as ReturnCreateForm<TValues, typeof properties>)
  return withStaticProperties<
    <TValues extends FieldValues>(props: FormProps<TValues>) => JSX.Element,
    ReturnCreateForm<
      TValues,
      typeof properties & { Trigger: { component: typeof Trigger; mapProps: {} } }
    >
  >(FormComponent, { ...extendsComponentControlled, Trigger })
}
