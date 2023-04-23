import React, { forwardRef } from 'react'
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form'

import { useField } from './fieldContext'
import { WithControllerProps } from './types'
import { composeEventHandlers } from 'tamagui'

export function withController<
  TProps extends {} = {},
  TFieldValues extends FieldValues = FieldValues
>(
  Component: React.JSXElementConstructor<TProps>,
  mapProps: Partial<Record<keyof ControllerRenderProps, keyof TProps>>
) {
  return forwardRef(function controlled<Values extends TFieldValues = TFieldValues>(
    props: WithControllerProps<Partial<TProps>, Values>,
    ref
  ) {
    const { control }= useFormContext()
    const { name: nameContext } = useField<TFieldValues>()
    const { name, rules, shouldUnregister, defaultValue, ...propsComponent } = props
    return (
      <Controller
        control={control}
        name={name ?? (nameContext as any)}
        rules={rules}
        shouldUnregister={shouldUnregister}
        defaultValue={defaultValue}
        render={({ field: { ref: innerRef, ...field }, ...other }) => {
          const propsMapped = Object.keys(field).reduce((acc, keyFrom) => {
            const keyTo = mapProps[keyFrom]
            const propFrom = field[keyFrom]
            acc[keyTo ?? keyFrom] = keyTo?.match(/^on/g)
              ? composeEventHandlers(propFrom, props[keyTo], { checkDefaultPrevented: false })
              : propFrom
            return acc
          }, {})
          return <Component ref={innerRef} {...(propsComponent as TProps)} {...propsMapped} />
        }}
      />
    )
  })
}
