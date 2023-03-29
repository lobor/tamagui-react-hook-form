import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: './src/tamagui.config.ts',
      components: ["tamagui", "tamagui-react-hook-form"],
    }),
  ],
})