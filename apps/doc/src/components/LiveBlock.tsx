import { Button, Theme, YStack } from '@my/ui'
import { useEffect, useRef, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { useTheme } from 'next-themes'

export const LiveBlock = ({ code, scope }) => {
  const [showCode, setShowCode] = useState(false)
  const toto = useTheme()
  console.log(toto.resolvedTheme)
  return (
    <LiveProvider code={code} scope={scope} noInline language="tsx">
        <YStack gap="$4" marginTop="$4">
          <YStack
            borderRadius={'$4'}
            backgroundColor="$backgroundFocus"
            padding="$4"
            gap="$4"
          >
            <LivePreview />
            <LiveError style={{ color: 'red' }} />
            <Button alignSelf="flex-end" size="$2" onPress={() => setShowCode(!showCode)}>
              Show code
            </Button>
          </YStack>
          {showCode && (
            <YStack borderRadius={'$4'} backgroundColor="$backgroundFocus" padding="$4" gap="$4">
              <LiveEditor style={{ padding: 0, backgroundColor: 'transparent' }} />
            </YStack>
          )}
        </YStack>
    </LiveProvider>
  )
}
