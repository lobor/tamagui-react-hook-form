export default {
  logo: <strong>tamagui-react-hook-form</strong>,
  project: {
    link: 'https://github.com/lobor/tamagui-react-hook-form/',
  },
  docsRepositoryBase: 'https://github.com/lobor/tamagui-react-hook-form/blob/main/apps/doc',
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
      }
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – tamagui-react-hook-form',
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/lobor" target="_blank" rel="noreferrer">
          lobor
        </a>
        .
      </span>
    ),
  },

  // ...
}
