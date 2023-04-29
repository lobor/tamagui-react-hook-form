import { Button, YStack } from '@my/ui'
import { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import vsDark from 'prism-react-renderer/themes/vsDark'

export const LiveBlock = ({ code, scope }) => {
  const [showCode, setShowCode] = useState(false)
  // Prism.
  return (
    <LiveProvider code={code} scope={scope} noInline language="tsx" theme={vsDark}>
      <YStack borderRadius={'$4'} backgroundColor="$backgroundFocus" padding="$4" gap="$4">
        <LivePreview />
        <LiveError style={{ color: 'red' }} />
        <Button alignSelf="flex-end" size="$2" onPress={() => setShowCode((old) => !old)}>
          Show code
        </Button>
      </YStack>
      <YStack gap="$4" marginTop="$4">
        <YStack
          borderRadius={'$4'}
          backgroundColor="$backgroundFocus"
          padding="$4"
          gap="$4"
          display={showCode ? undefined : 'none'}
        >
          <LiveEditor style={{ padding: 0, backgroundColor: 'transparent' }} />
        </YStack>
      </YStack>
    </LiveProvider>
  )
}
