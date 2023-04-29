import { Button, YStack } from '@my/ui'
import { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const LiveBlock = ({ code, scope }) => {
  const [showCode, setShowCode] = useState(false)
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
