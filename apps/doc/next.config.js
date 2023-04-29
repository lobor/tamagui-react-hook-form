process.env.TAMAGUI_TARGET = 'web'

const withNextra = require('nextra')
const { withTamagui } = require('@tamagui/next-plugin')

const plugins = [
  withNextra({
    theme: './theme.tsx',
    themeConfig: './theme.config.jsx',
  }),
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', '@my/ui'],
    disableExtraction: true,
  }),
]

module.exports = function (name, { defaultConfig }) {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    output: 'export',
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
    ],
    experimental: {
      // optimizeCss: true,
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
