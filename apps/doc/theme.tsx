import type { NextraThemeLayoutProps } from 'nextra'
import Layout from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { useTheme } from 'next-themes'
import { PropsWithChildren, Suspense, useEffect, useMemo } from 'react'
import { TamaguiProvider } from '@my/ui'
import config from './tamagui.config'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

export default (props: NextraThemeLayoutProps) => {
  const { children, ...other } = props

  return (
    <Layout {...other}>
      <Theme>{children}</Theme>
    </Layout>
  )
}

const Theme = ({ children }: PropsWithChildren) => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useRootTheme({ fallback: 'dark' })

  return (
    <NextThemeProvider
      forcedTheme={resolvedTheme}
    >
      <TamaguiProvider
        config={config}
        disableInjectCSS
        disableRootThemeClass
      >
        <Suspense fallback={null}>
          {useMemo(() => {
            return children
          }, [children])}
        </Suspense>
      </TamaguiProvider>
    </NextThemeProvider>
  )
}
