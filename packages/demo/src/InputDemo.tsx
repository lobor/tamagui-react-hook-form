import React from 'react'
import { Button, SizableText, YStack, TamaguiProvider, Input, config } from '@my/ui'

export const InputDemo = () => {
  return (
    <>
        <TamaguiProvider disableRootThemeClass config={config} defaultTheme="dark">
          <Toto />
        </TamaguiProvider>
        <style dangerouslySetInnerHTML={{ __html: config.getCSS() }} />
    </>
  )
}

const Toto = () => {
  return <Input />
}
