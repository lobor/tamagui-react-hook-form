import { Button, Label, Paragraph, SizableStack, SizableText, XStack, YStack } from '@my/ui'
import { Check, ChevronLeft } from '@tamagui/lucide-icons'
import React, { useEffect, useRef, useState } from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { createForm } from 'tamagui-react-hook-form'
import { UseFormReturn } from 'react-hook-form'

const { useParam } = createParam<{ id: string }>()

interface SignUpValues {
  pseudo: string
  description: string
  age: number[]
  theme: string
  level: string
  cgu: boolean
  prefer: 'cat' | 'dog' | ''
}

const Form = createForm<SignUpValues>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  const [values, setValues] = useState<SignUpValues>()
  const formRef = useRef<UseFormReturn<SignUpValues>>(null)

  const defaultValues: SignUpValues = {
    pseudo: '',
    description: '',
    age: [],
    theme: '',
    level: '',
    cgu: false,
    prefer: '',
  };

  return (
    <YStack space marginHorizontal="auto">
      <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}></Button>
      <Form
        fRef={formRef}
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

        <YStack>
          <Label htmlFor="description">Description</Label>
          <Form.TextArea id="description" name="description" />
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
      <SizableStack bordered borderRadius="$4" padding="$2" backgroundColor="$background">
        <SizableText tag="pre" whiteSpace="pre">
          {JSON.stringify(values, null, 2)}
        </SizableText>
      </SizableStack>
    </YStack>
  )
}
