import { Form, FormTriggerProps } from 'tamagui'
import { useFormState } from 'react-hook-form'

export const Trigger = (props: FormTriggerProps) => {
  const { isValid } = useFormState()
  // @ts-ignore
  return <Form.Trigger disabled={!isValid} {...props} />
}
