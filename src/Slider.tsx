import { Slider } from '@tamagui/slider'
import { withStaticProperties } from '@tamagui/web'

import { withController } from './withController'

const { Track, TrackActive, Thumb } = Slider

export const SliderControlled = withStaticProperties(
  withController(Slider, { onChange: 'onValueChange' }),
  { Track, TrackActive, Thumb }
)
