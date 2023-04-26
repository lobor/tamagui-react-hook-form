import { Checkbox, Input, RadioGroup, Select, Slider, Switch, TextArea, ToggleGroup } from 'tamagui'
import { Value } from './Value'
import { FieldControlled } from './Field'
import { Message } from './Message'

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
  Value: {
    component: Value,
    mapProps: {},
  },
  Field: {
    component: FieldControlled,
    mapProps: {},
  },
  Message: {
    component: Message,
    mapProps: {},
  },
  ToggleGroup: {
    component: ToggleGroup,
    mapProps: { onChange: "onValueChange" },
  },
}
