import { Slider, withStaticProperties } from "tamagui";
import { withController } from "./withController";
const { Track, TrackActive, Thumb } = Slider;
const SliderControlled = withStaticProperties(
  withController(Slider, { onChange: "onValueChange" }),
  { Track, TrackActive, Thumb }
);
export {
  SliderControlled
};
//# sourceMappingURL=Slider.mjs.map
