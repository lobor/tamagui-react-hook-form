import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import {
  FormProps,
} from './types'
import { Form as FormDefault } from 'tamagui'
import { useEffect } from 'react'

function FormComponent<TValues extends FieldValues>({
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
  onChangeForm,
  ...formProps
}: FormProps<TValues>) {
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
  })

  useEffect(() => {
    onChangeForm?.(form)
  }, [form])

  return (
    <FormProvider {...form}>
      <FormDefault onSubmit={form.handleSubmit(onSubmit)} {...formProps} />
    </FormProvider>
  )
}

export { FormComponent }
