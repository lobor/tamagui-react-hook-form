import { config } from './tamagui.config'

export type Conf = typeof config

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf
}

export default config
