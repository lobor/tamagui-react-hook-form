# Custom helper

```tsx
import { createConfigForm, defaultComponents } from 'tamagui-react-hook-form'

const customHelpers = {
  Foo: ({ name, ...props }: SizableTextProps & { name?: keyof NewFormValues }) => {
    const { name: nameField } = useField()
    const { watch } = useFormContext()
    const value = watch(name ?? nameField)
    return useMemo(() => <SizableText {...props}>Foo: {value}</SizableText>, [value, props])
  },
}

const createForm = createConfigForm(defaultComponents, customHelpers)

interface FormValues {
  name: string
}

const Form = createForm<FormValues>()

render(() => {
  return (
    <Form onSubmit={(e) => console.log(e)}>
      <Form.Input name="name" />
      <Form.Foo name="name" />
    </Form>
  )
})
```
