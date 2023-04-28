import { Checkbox, Input, RadioGroup, Select, Slider, Switch, TextArea, ToggleGroup } from 'tamagui'

export const defaultComponents = {
  Checkbox: {
    component: Checkbox,
    mapProps: { onChange: 'onCheckedChange', value: 'checked' },
  },
  Input: {
    component: Input,
    mapProps: { onChange: 'onChangeText' },
  },
  RadioGroup: {
    component: RadioGroup,
    mapProps: { onChange: 'onValueChange' },
  },
  Select: {
    component: Select,
    mapProps: { onChange: 'onValueChange' },
  },
  Slider: {
    component: Slider,
    mapProps: { onChange: 'onValueChange' },
  },
  Switch: {
    component: Switch,
    mapProps: {
      onChange: 'onCheckedChange',
      value: 'checked',
    },
  },
  TextArea: {
    component: TextArea,
    mapProps: { onChange: 'onChangeText' },
  },
  ToggleGroup: {
    component: ToggleGroup,
    mapProps: { onChange: "onValueChange" },
  },
}
