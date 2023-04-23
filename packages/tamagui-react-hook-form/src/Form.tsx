import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import {
  FormProps,
} from './types'
import { useIsomorphicLayoutEffect, Form as FormDefault } from 'tamagui'

function FormComponent<TValues extends FieldValues>({
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

  useIsomorphicLayoutEffect(() => {
    if (fRef) {
      fRef.current = form
    }
  }, [form])

  return (
    <FormProvider {...form}>
      <FormDefault onSubmit={form.handleSubmit(onSubmit)} {...formProps} children={children} />
    </FormProvider>
  )
}

export { FormComponent }
