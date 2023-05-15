import {
  Button,
  Label,
  Paragraph,
  LinearGradient,
  SizableStack,
  SizableText,
  XStack,
  YStack,
  Adapt,
  Sheet,
  ButtonText,
  createForm,
  createConfigForm,
  SizableTextProps,
} from '@my/ui'
import { Check, ChevronDown, ChevronLeft, ChevronUp } from '@tamagui/lucide-icons'
import React, { useMemo, useRef, useState } from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { UseFormReturn, useFormContext } from 'react-hook-form'
import { defaultComponents, useField } from 'tamagui-react-hook-form'

const { useParam } = createParam<{ id: string }>()

interface SignUpValues {
  pseudo: string
  description: string
  age: number[]
  theme: string
  level: string
  cgu: boolean
  prefer: 'cat' | 'dog' | ''
  color: 'Yellow' | 'Blue' | 'Green' | ''
}

const toto = {
  Test: {
    component: ({ value, onChange }: { value: string; onChange: (param: string) => void }) => {
      return (
        <XStack space="$4">
          <Button
            backgroundColor={value === 'Foo' ? '$backgroundStrong' : '$background'}
            onPress={() => onChange('Foo')}
          >
            <ButtonText>Foo</ButtonText>
          </Button>
          <Button
            backgroundColor={value === 'Bar' ? '$backgroundStrong' : '$background'}
            onPress={() => onChange('Bar')}
          >
            <ButtonText>Bar</ButtonText>
          </Button>
          <Button
            backgroundColor={value === 'Dupond' ? '$backgroundStrong' : '$background'}
            onPress={() => onChange('Dupond')}
          >
            <ButtonText>Dupond</ButtonText>
          </Button>
        </XStack>
      )
    },
  },
}

const Form = createForm<SignUpValues, typeof toto>(toto)

interface NewFormValues {
  name: string
}

const customHelpers = {
  Foo: ({ name, ...props }: SizableTextProps & { name?: keyof NewFormValues }) => {
    const { name: nameField } = useField()
    const { watch } = useFormContext()
    const value = watch(name ?? nameField)
    return useMemo(() => <SizableText {...props}>Foo: {value}</SizableText>, [value, props])
  },
}

const newCreateForm = createConfigForm<typeof defaultComponents, typeof customHelpers>(
  defaultComponents,
  customHelpers
)

const NewForm = newCreateForm<NewFormValues, typeof defaultComponents>(defaultComponents)

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  const [values, setValues] = useState<SignUpValues>()
  const formRef = useRef<UseFormReturn<SignUpValues>>()

  const defaultValues: SignUpValues = {
    pseudo: '',
    description: '',
    age: [],
    theme: '',
    level: '',
    cgu: false,
    prefer: '',
    color: '',
  }
  console.log(formRef.current)
  return (
    <YStack space width="90%" marginHorizontal="auto">
      <YStack>
        <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
        <Button {...link} icon={ChevronLeft} />
      </YStack>
      <XStack space alignItems="flex-start">
        <NewForm onSubmit={() => {}}>
          <NewForm.Input name="name" />
          <NewForm.Foo name="name" />
        </NewForm>
        <Form
          onChangeForm={(form) => (formRef.current = form)}
          onSubmit={(values) => {
            setValues(values)
            formRef.current?.reset(defaultValues)
          }}
          space="$4"
          mode="onChange"
          defaultValues={defaultValues}
        >
          <YStack>
            <Label htmlFor="pseudo">Pseudo</Label>
            <Form.Input
              id="pseudo"
              name="pseudo"
              rules={{
                required: 'Field required',
                minLength: {
                  value: 3,
                  message: 'Must be greater than 3 characters',
                },
                maxLength: {
                  value: 6,
                  message: 'Must be less than 6 characters',
                },
              }}
            />
            <Form.Message name="pseudo" />
          </YStack>

          <Form.Test name="pseudo" />

          <YStack>
            <Label htmlFor="color">Your color</Label>
            <Form.Select
              id="color"
              name="color"
              rules={{
                required: 'Field required',
              }}
            >
              <Form.Select.Trigger iconAfter={ChevronDown}>
                <Form.Select.Value placeholder="Something" />
              </Form.Select.Trigger>

              <Adapt when="sm" platform="touch">
                <Sheet modal dismissOnSnapToBottom>
                  <Sheet.Frame>
                    <Sheet.ScrollView>
                      <Adapt.Contents />
                    </Sheet.ScrollView>
                  </Sheet.Frame>
                  <Sheet.Overlay />
                </Sheet>
              </Adapt>

              <Form.Select.Content zIndex={200000}>
                <Form.Select.Viewport minWidth={200}>
                  <Form.Select.Group space="$0">
                    {[{ name: 'Yellow' }, { name: 'Blue' }, { name: 'Green' }].map((item, i) => {
                      return (
                        <Form.Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                          <Form.Select.ItemText>{item.name}</Form.Select.ItemText>
                          <Form.Select.ItemIndicator marginLeft="auto">
                            <Check size={16} />
                          </Form.Select.ItemIndicator>
                        </Form.Select.Item>
                      )
                    })}
                  </Form.Select.Group>
                </Form.Select.Viewport>
              </Form.Select.Content>
            </Form.Select>
            <Form.Message name="pseudo" />
          </YStack>

          <YStack>
            <Label htmlFor="description">Description</Label>
            <Form.TextArea id="description" name="description" numberOfLines={4} />
            <Form.Message name="description" />
          </YStack>

          <Form.Field name="age">
            <XStack alignItems="center" justifyContent="space-between">
              <Label htmlFor="age">Age</Label>
              <Form.Value />
            </XStack>
            <Form.Slider
              id="age"
              max={100}
              step={1}
              rules={{ required: 'Required field' }}
              marginTop="$2"
              marginBottom="$4"
            >
              <Form.Slider.Track>
                <Form.Slider.TrackActive />
              </Form.Slider.Track>
              <Form.Slider.Thumb index={0} circular elevate />
            </Form.Slider>
            <Form.Message name="age" />
          </Form.Field>

          <YStack>
            <Label htmlFor="theme">Dark mode</Label>
            <Form.Switch id="theme" name="theme" size="$5">
              <Form.Switch.Thumb animation="quick" />
            </Form.Switch>
          </YStack>

          <YStack>
            <Label htmlFor="prefer">Your animal</Label>
            <Form.ToggleGroup name="prefer" orientation="horizontal" type={'single'}>
              <Form.ToggleGroup.Item value="dog" aria-label="Left aligned">
                <SizableText>Dog</SizableText>
              </Form.ToggleGroup.Item>
              <Form.ToggleGroup.Item value="cat" aria-label="Center aligned">
                <SizableText>Cat</SizableText>
              </Form.ToggleGroup.Item>
            </Form.ToggleGroup>
          </YStack>

          <YStack>
            <SizableText>Level</SizableText>
            <Form.RadioGroup name="level">
              <XStack space="$2" alignItems="center">
                <Form.RadioGroup.Item size="$4" id="junior" value={'junior'}>
                  <Form.RadioGroup.Indicator />
                </Form.RadioGroup.Item>
                <Label htmlFor="junior" size="$4">
                  Junior
                </Label>
              </XStack>

              <XStack space="$2" alignItems="center">
                <Form.RadioGroup.Item size="$4" id="novice" value={'novice'}>
                  <Form.RadioGroup.Indicator />
                </Form.RadioGroup.Item>
                <Label htmlFor="novice" size="$4">
                  Novice
                </Label>
              </XStack>
              <XStack space="$2" alignItems="center">
                <Form.RadioGroup.Item size="$4" id="expert" value={'expert'}>
                  <Form.RadioGroup.Indicator />
                </Form.RadioGroup.Item>
                <Label htmlFor="expert" size="$4">
                  Expert
                </Label>
              </XStack>
            </Form.RadioGroup>
          </YStack>

          <YStack>
            <XStack alignItems="center" space="$2">
              <Form.Checkbox
                id="cgu"
                name="cgu"
                value="true"
                size="$4"
                rules={{
                  required: 'Field required',
                }}
              >
                <Form.Checkbox.Indicator>
                  <Check />
                </Form.Checkbox.Indicator>
              </Form.Checkbox>
              <Label htmlFor={'cgu'} size="$4">
                Accept terms and conditions
              </Label>
            </XStack>
            <Form.Message name="cgu" />
          </YStack>

          <Form.Trigger asChild>
            <Button>Submit</Button>
          </Form.Trigger>
        </Form>
        <SizableStack
          bordered
          borderRadius="$4"
          padding="$2"
          backgroundColor="$background"
          flex={1}
        >
          <SizableText tag="pre" whiteSpace="pre">
            {JSON.stringify(values, null, 2) || 'No data recieve'}
          </SizableText>
        </SizableStack>
      </XStack>
    </YStack>
  )
}
