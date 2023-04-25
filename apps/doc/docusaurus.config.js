// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const webpack = require('webpack')
const { shouldExclude, TamaguiPlugin } = require('tamagui-loader')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tamagui-react-hook-form',
  tagline: 'tamagui form with react-hook-form',
  favicon: 'img/favicon.ico',

  url: 'https://tamagui-react-hook-form.lobor',
  baseUrl: '/tamagui-react-hook-form/',

  organizationName: 'lobor', // Usually your GitHub org/user name.
  projectName: 'tamagui-react-hook-form', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus2-dotenv',
    'docusaurus-plugin-react-native-web',
    function (context, options) {
      return {
        name: 'mjs',
        configureWebpack() {
          return {
            plugins: [
              new TamaguiPlugin({
                config: './tamagui.config.ts',
                components: ['tamagui', "@my/ui"],
              }),
              new webpack.DefinePlugin({
                'process.env.TAMAGUI_TARGET': '"web"',
              }),
              new webpack.ProvidePlugin({
                "React": "react",
             }),
            ],
          }
        },
      }
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ...{
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'tamagui-react-hook-form',
        // logo: {
        //   alt: 'tamagui-react-hook-form',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/lobor/tamagui-react-hook-form',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
    /** @type {import('@docusaurus/theme-live-codeblock').ThemeConfig} */
    ...{
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
    },
  },
}

module.exports = config
