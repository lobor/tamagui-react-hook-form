import React from 'react'
import { TamaguiProvider, config, Button } from '@my/ui'

export default function Root({ children }) {
  return (
    <>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        defaultTheme={'dark'}
        // {...rest}
      >
        {children}
      </TamaguiProvider>
      <style dangerouslySetInnerHTML={{ __html: config.getCSS() }} />
    </>
  )
}
