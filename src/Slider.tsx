import { withStaticProperties } from 'tamagui'
import { Slider } from '@tamagui/slider'

import { withController } from './withController'

const { Track, TrackActive, Thumb } = Slider

export const SliderControlled = withStaticProperties(
  withController(Slider, { onChange: 'onValueChange' }),
  { Track, TrackActive, Thumb }
)
