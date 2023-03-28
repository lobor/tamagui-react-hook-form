import { config } from "@tamagui/config";
import { createTamagui } from "tamagui";

const tamaConf = createTamagui({
  ...config,
});

export type Conf = typeof tamaConf;

declare module "@tamagui/web" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaConf;
