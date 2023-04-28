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
import { ComponentType } from 'react'


type KeyOf<T, U extends keyof T = keyof T> = {
  [Key in U]: T[Key]
};

// type toto = KeyOf<typeof Form>;

type ReturnCreateForm<
  TValues extends FieldValues,
  TExtends extends {
    [key: string]: CustomFieldControlled<any>
  },
  U extends keyof TExtends = keyof TExtends
> = {
  [Key in U]: ExtractStaticProperties<TExtends[Key]['component']> &
    ((
      props: WithControllerProps<Partial<ExtractProps<TExtends[Key]['component']>>, TValues>
    ) => JSX.Element)
}

type AddName<TValues extends FieldValues, THelper extends { [key: string]: any }> = {
  [Key in keyof THelper]: ComponentType<
    Omit<ExtractProps<THelper[Key]>, 'name'> & { name?: keyof TValues }
  >
}

export const createConfigForm = <
  TProperties extends {
    [key: string]: CustomFieldControlled<any>
  },
  THelpers extends { [key: string]: any }
>(
  properties: TProperties,
  helpers: THelpers
) => {
  return function createForm<
    TValues extends FieldValues,
    TQuick extends {
      [key: string]: CustomFieldControlled<any>
    } = {
      [key: string]: CustomFieldControlled<any>
    }
  >(quickComponent?: TQuick) {
    const allProperties = {
      ...properties,
      ...(quickComponent as TQuick),
    }
    const extendsComponentControlled = (
      Object.keys(allProperties) as (keyof typeof allProperties)[]
    ).reduce((acc, key) => {
      const { component, mapProps } = allProperties[key]
      acc[key] = withStaticProperties(
        {
          ...component,
        } as any,
        withController(component as any, mapProps || {})
      )
      return acc
    }, {} as any)
    return withStaticProperties(FormComponent, {
      ...extendsComponentControlled,
      ...helpers,
    }) as unknown as ((props: FormProps<TValues>) => JSX.Element) &
      ReturnCreateForm<TValues, typeof allProperties> &
      Required<AddName<TValues, THelpers>>
  }
}
