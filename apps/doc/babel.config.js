module.exports = {
  presets: ["@babel/preset-react", require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    'babel-plugin-react-native-web',
    "@babel/plugin-transform-react-jsx",
    // [
    //   "transform-inline-environment-variables",
    //   {
    //     include: ["TAMAGUI_TARGET"],
    //   },
    // ],
    // [
    //   require.resolve('babel-plugin-module-resolver'),
    //   {
    //     root: ['../..'],
    //     alias: {
    //       // define aliases to shorten the import paths
    //       // app: '../../packages/app',
    //       '@my/demo': './packages/demo/dist/cjs/index.js',
    //       // 'tamagui-react-hook-form': '../../packages/tamagui-react-hook-form',
    //     },
    //     extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
    //   },
    // ],
    // [
    //   '@tamagui/babel-plugin',
    //   {
    //     exclude: /node_modules/,
    //     components: ['tamagui', '@my/ui'],
    //     config: './tamagui.config.ts',
    //   },
    // ]
  ],
}
