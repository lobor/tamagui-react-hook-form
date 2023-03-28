import { Switch, withStaticProperties } from 'tamagui'

import { withController } from './withController'

const { Thumb } = Switch;

export const SwitchControlled = withStaticProperties(
  withController(Switch, {
    onChange: 'onCheckedChange',
    value: 'checked',
  }),
  { Thumb }
)
