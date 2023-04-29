import '../styles/globals.css'

import { AppProps } from 'next/app'

export default function App(props: AppProps) {
  // const [theme, setTheme] = useRootTheme({ fallback: 'dark' })
  // useMemo below to avoid re-render on dark/light change
  return (
    <>
      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />
      <ContentInner {...props} />
    </>
  )
}

function ContentInner({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  )
}
