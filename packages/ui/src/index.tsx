import { createConfigForm, defaultComponents, defaultHelpers } from 'tamagui-react-hook-form'

export * from 'tamagui'
export * from '@tamagui/toast'
export * from './CustomToast'
export * from './MyComponent'
export * from 'tamagui-react-hook-form'
export { config } from './tamagui.config'

export const createForm = createConfigForm(defaultComponents, defaultHelpers)
