import React, { PropsWithChildren } from 'react'
import { Button } from 'tamagui'
import { styled, YStack } from 'tamagui'

const Parent = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
export const MyComponent = ({ children }: PropsWithChildren) => {
  return (
    <Parent>
      <Button>{children}</Button>
    </Parent>
  )
}
