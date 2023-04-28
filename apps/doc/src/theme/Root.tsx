import React, { Suspense } from 'react'
import { TamaguiProvider, config, Button } from '@my/ui'

export default function Root({ children }) {
  return (
    <>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={'dark'}
        // {...rest}
      >
        <Suspense>{children}</Suspense>
      </TamaguiProvider>
      {/* <style dangerouslySetInnerHTML={{ __html: config.getCSS() }} /> */}
    </>
  )
}
