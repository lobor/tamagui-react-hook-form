import { RadioGroup } from '@tamagui/radio-group'
import { withStaticProperties } from "@tamagui/web";

import { withController } from './withController'

const { Item, Indicator } = RadioGroup

export const RadioGroupControlled = withStaticProperties(
  withController(RadioGroup, {
    onChange: 'onValueChange',
  }),
  { Item, Indicator }
)
