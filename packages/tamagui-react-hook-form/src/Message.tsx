import { SizableText, GetProps, styled } from 'tamagui'
import { useMemo } from 'react'
import {
  useFormContext,
  useFormState,
  FieldValues,
} from 'react-hook-form'
import { useField } from './fieldContext'

const MessageText = styled(SizableText, {
  name: "FormMessageText",
  color: "red"
})

export type MessageProps = GetProps<typeof MessageText> & { name: keyof FieldValues }

export const Message = ({ name: nameProps, ...props }: MessageProps) => {
  const { name: nameField } = useField()
  const name = nameProps ?? nameField;
  const { control } = useFormContext()
  const { errors } = useFormState({ control, name })
  return useMemo(
    () => (errors[name]?.message ? <MessageText {...props}>{errors[name]?.message}</MessageText> : null),
    [errors[name]?.message]
  )
}
