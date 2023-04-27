import { withStaticProperties } from 'tamagui'
import { FieldValues } from 'react-hook-form'
import {
  CustomFieldControlled,
  ExtractProps,
  ExtractStaticProperties,
  FormProps,
  WithControllerProps,
} from './types'
import { withController } from './withController'
import { FormComponent } from './Form'
import { Trigger } from './Trigger'

type ReturnCreateForm<
  TValues extends FieldValues,
  TExtends extends {
    [key: string]: CustomFieldControlled<any>
  }
> = {
  [key in keyof TExtends]: ExtractStaticProperties<TExtends[key]['component']> & ((
    props: WithControllerProps<Partial<ExtractProps<TExtends[key]['component']>>, TValues>
  ) => JSX.Element)
}

export const createConfigForm = <
  TProperties extends {
    [key: string]: CustomFieldControlled<any>
  }
>(
  properties: TProperties
) => {
  return function createForm<TValues extends FieldValues>() {
    const extendsComponentControlled = (
      Object.keys(properties) as (keyof typeof properties)[]
    ).reduce<ReturnCreateForm<TValues, typeof properties>>((acc, key) => {
      const { component, mapProps } = properties[key]
      acc[key] = withStaticProperties(
        {
          ...component,
        } as any,
        withController(component as any, mapProps as any)
      )
      return acc
    }, {} as ReturnCreateForm<TValues, typeof properties>)
    return withStaticProperties<
      <TValues extends FieldValues>(props: FormProps<TValues>) => JSX.Element,
      ReturnCreateForm<
        TValues,
        typeof properties & { Trigger: { component: typeof Trigger; mapProps: {} } }
      >
    >(FormComponent, { ...extendsComponentControlled, Trigger }) as unknown as ((
      props: FormProps<TValues>
    ) => JSX.Element) & ReturnCreateForm<TValues, TProperties> & { Trigger: typeof Trigger }
  }
}
