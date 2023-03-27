import { withStaticProperties } from 'tamagui'
import { Checkbox } from '@tamagui/checkbox'

import { withController } from './withController'

const { Indicator } = Checkbox

export const CheckboxControlled = withStaticProperties(
  withController(Checkbox, { onChange: 'onCheckedChange' }),
  {
    Indicator,
  }
)
