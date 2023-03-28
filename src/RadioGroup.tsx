import { RadioGroup, withStaticProperties } from 'tamagui'

import { withController } from './withController'

const { Item, Indicator } = RadioGroup

export const RadioGroupControlled = withStaticProperties(
  withController(RadioGroup, {
    onChange: 'onValueChange',
  }),
  { Item, Indicator }
)
