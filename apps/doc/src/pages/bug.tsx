import { Button, TamaguiProvider, config } from '@my/ui'

export default () => {
  return (
    <TamaguiProvider config={config} disableInjectCSS disableRootThemeClass defaultTheme={'dark'}>
      <Button>toto</Button>
    </TamaguiProvider>
  )
}
