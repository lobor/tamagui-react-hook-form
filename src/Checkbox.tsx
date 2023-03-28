import { withStaticProperties, Checkbox } from 'tamagui'

import { withController } from './withController'

const { Indicator } = Checkbox

export const CheckboxControlled = withStaticProperties(
  withController(Checkbox, { onChange: 'onCheckedChange' }),
  {
    Indicator,
  }
)
