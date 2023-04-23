/// <reference types="react" />
import { FieldValues } from 'react-hook-form';
import { FormProps, WithControllerProps } from './types';
import { FieldControlled } from './Field';
type Element<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps> ? React.ComponentType<TProps> : React.ComponentType<TComponentOrTProps>;
export declare function createForm<TValues extends FieldValues>(): (<TValues_1 extends FieldValues>(props: FormProps<TValues_1>) => JSX.Element) & Required<{
    Checkbox: ((props: WithControllerProps<Partial<import("tamagui").CheckboxProps & import("react").RefAttributes<HTMLButtonElement>>, TValues>) => JSX.Element) & import("react").ForwardRefExoticComponent<import("tamagui").CheckboxProps & import("react").RefAttributes<HTMLButtonElement>> & {
        Indicator: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }>> & {
            forceMount?: true | undefined;
            disablePassStyles?: boolean | undefined;
        }) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & {
            forceMount?: true | undefined;
            disablePassStyles?: boolean | undefined;
        }, "ref">) & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
    };
    Input: ((props: WithControllerProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("react").RefAttributes<import("tamagui").TamaguiElement>>, TValues>) => JSX.Element) & import("@tamagui/web").ReactComponentWithRef<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{}, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>>, import("tamagui").TamaguiElement> & {
        staticConfig: import("tamagui").StaticConfigParsed;
        extractable: <X>(a: X, opts?: Partial<import("tamagui").StaticConfig> | undefined) => X;
    } & {
        contextType: import("react").Context<any> | undefined;
        prototype: import("react-native/types").TextInput;
        State: import("react-native/types").TextInputState;
    };
    RadioGroup: ((props: WithControllerProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }>> & {
        value?: string | undefined;
        defaultValue?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        name?: string | undefined;
        native?: boolean | undefined;
        accentColor?: string | undefined;
    } & import("react").RefAttributes<HTMLElement | import("react-native/types").View>>, TValues>) => JSX.Element) & import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "orientation"> & {
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }>> & {
        value?: string | undefined;
        defaultValue?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        name?: string | undefined;
        native?: boolean | undefined;
        accentColor?: string | undefined;
    } & import("react").RefAttributes<HTMLElement | import("react-native/types").View>> & {
        Indicator: import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "unstyled"> & {
            readonly unstyled?: boolean | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "unstyled"> & {
            readonly unstyled?: boolean | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "unstyled"> & {
            readonly unstyled?: boolean | undefined;
        }>> & {
            forceMount?: boolean | undefined;
            unstyled?: boolean | undefined;
        } & import("react").RefAttributes<HTMLElement | import("react-native/types").View>>;
        Item: import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        }>> & {
            value: string;
            id?: string | undefined;
            labelledBy?: string | undefined;
            disabled?: boolean | undefined;
        } & import("react").RefAttributes<HTMLButtonElement>>;
    };
    Select: ((props: WithControllerProps<Partial<import("tamagui").SelectProps & {
        __scopeSelect?: import("tamagui").Scope<any>;
    }>, TValues>) => JSX.Element) & ((props: import("@tamagui/select/types/types").ScopedProps<import("tamagui").SelectProps>) => JSX.Element) & {
        Adapt: (({ platform, when, children }: import("tamagui").AdaptProps) => any) & {
            Contents: {
                (props: any): import("react").FunctionComponentElement<any>;
                shouldForwardSpace: boolean;
            };
        };
        Content: ({ children, __scopeSelect, zIndex, ...focusScopeProps }: {
            children?: import("react").ReactNode;
            zIndex?: number | undefined;
        } & {
            __scopeSelect?: import("tamagui").Scope<any>;
        } & import("@tamagui/focus-scope").FocusScopeProps) => JSX.Element | null;
        Group: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>>) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>>, "ref">) & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Icon: import("tamagui").TamaguiComponent<(Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>>) | (Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>>), import("tamagui").TamaguiElement, Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, {
            displayName: string | undefined;
        }>;
        Item: import("react").ForwardRefExoticComponent<import("tamagui").SelectItemProps & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        ItemIndicator: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>>) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>>, "ref">) & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        ItemText: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }>>) | Omit<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>>, "ref">) & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Label: import("react").ForwardRefExoticComponent<Omit<import("tamagui").TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }>> & import("@tamagui/web").ThemeableProps & {
            icon?: JSX.Element | import("react").FunctionComponent<{
                color?: string | undefined;
                size?: number | undefined;
            }> | null | undefined;
            iconAfter?: JSX.Element | import("react").FunctionComponent<{
                color?: string | undefined;
                size?: number | undefined;
            }> | null | undefined;
            scaleIcon?: number | undefined;
            spaceFlex?: number | boolean | undefined;
            scaleSpace?: number | undefined;
            title?: import("react").ReactNode;
            subTitle?: import("react").ReactNode;
            noTextWrap?: boolean | "all" | undefined;
        } & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        ScrollDownButton: import("react").ForwardRefExoticComponent<import("tamagui").SelectScrollButtonProps & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        ScrollUpButton: import("react").ForwardRefExoticComponent<import("tamagui").SelectScrollButtonProps & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Trigger: import("react").ForwardRefExoticComponent<Omit<import("tamagui").TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }>> & import("@tamagui/web").ThemeableProps & {
            icon?: JSX.Element | import("react").FunctionComponent<{
                color?: string | undefined;
                size?: number | undefined;
            }> | null | undefined;
            iconAfter?: JSX.Element | import("react").FunctionComponent<{
                color?: string | undefined;
                size?: number | undefined;
            }> | null | undefined;
            scaleIcon?: number | undefined;
            spaceFlex?: number | boolean | undefined;
            scaleSpace?: number | undefined;
            title?: import("react").ReactNode;
            subTitle?: import("react").ReactNode;
            noTextWrap?: boolean | "all" | undefined;
        } & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Value: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }>> & {
            placeholder?: import("react").ReactNode;
        }) | Omit<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & {
            placeholder?: import("react").ReactNode;
        }, "ref"> | Omit<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & {
            placeholder?: import("react").ReactNode;
        }, "ref"> | Omit<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
            readonly size?: import("tamagui").FontSizeTokens | undefined;
        } & {
            [x: string]: undefined;
        }, string | number> & {
            [x: string]: undefined;
        }>> & {
            placeholder?: import("react").ReactNode;
        }, "ref">) & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Viewport: import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "transparent" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "chromeless"> & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }>> & {
            size?: import("tamagui").SizeTokens | undefined;
            disableScroll?: boolean | undefined;
        } & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        Sheet: import("react").FunctionComponent<Omit<import("@tamagui/sheet/types/types").SheetProps, "open" | "onOpenChange"> & import("react").RefAttributes<import("react-native/types").View>> & {
            Handle: ({ __scopeSheet, ...props }: import("@tamagui/sheet/types/types").SheetScopedProps<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            }>>>) => JSX.Element;
            Frame: import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            }>> & {
                __scopeSheet?: import("tamagui").Scope<any>;
            } & import("react").RefAttributes<unknown>>;
            Overlay: ({ __scopeSheet, ...props }: import("@tamagui/sheet/types/types").SheetScopedProps<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            } & {
                readonly backgrounded?: boolean | undefined;
                readonly radiused?: boolean | undefined;
                readonly hoverTheme?: boolean | undefined;
                readonly pressTheme?: boolean | undefined;
                readonly focusTheme?: boolean | undefined;
                readonly circular?: boolean | undefined;
                readonly padded?: boolean | undefined;
                readonly elevate?: boolean | undefined;
                readonly bordered?: number | boolean | undefined;
                readonly transparent?: boolean | undefined;
                readonly chromeless?: boolean | "all" | undefined;
            }, "closed"> & {
                readonly closed?: boolean | undefined;
            } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            } & {
                readonly backgrounded?: boolean | undefined;
                readonly radiused?: boolean | undefined;
                readonly hoverTheme?: boolean | undefined;
                readonly pressTheme?: boolean | undefined;
                readonly focusTheme?: boolean | undefined;
                readonly circular?: boolean | undefined;
                readonly padded?: boolean | undefined;
                readonly elevate?: boolean | undefined;
                readonly bordered?: number | boolean | undefined;
                readonly transparent?: boolean | undefined;
                readonly chromeless?: boolean | "all" | undefined;
            }, "closed"> & {
                readonly closed?: boolean | undefined;
            }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
                readonly fullscreen?: boolean | undefined;
                readonly elevation?: import("tamagui").SizeTokens | undefined;
            } & {
                readonly backgrounded?: boolean | undefined;
                readonly radiused?: boolean | undefined;
                readonly hoverTheme?: boolean | undefined;
                readonly pressTheme?: boolean | undefined;
                readonly focusTheme?: boolean | undefined;
                readonly circular?: boolean | undefined;
                readonly padded?: boolean | undefined;
                readonly elevate?: boolean | undefined;
                readonly bordered?: number | boolean | undefined;
                readonly transparent?: boolean | undefined;
                readonly chromeless?: boolean | "all" | undefined;
            }, "closed"> & {
                readonly closed?: boolean | undefined;
            }>>>) => JSX.Element;
            ScrollView: import("react").ForwardRefExoticComponent<import("react-native/types").ScrollViewProps & Omit<import("@tamagui/web").StackProps, keyof import("react-native/types").ScrollViewProps> & Omit<{}, "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
            } & import("@tamagui/web").MediaProps<Partial<import("react-native/types").ScrollViewProps & Omit<import("@tamagui/web").StackProps, keyof import("react-native/types").ScrollViewProps> & Omit<{}, "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
            }>> & import("@tamagui/web").PseudoProps<Partial<import("react-native/types").ScrollViewProps & Omit<import("@tamagui/web").StackProps, keyof import("react-native/types").ScrollViewProps> & Omit<{}, "fullscreen"> & {
                readonly fullscreen?: boolean | undefined;
            }>> & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
        };
    };
    Slider: ((props: WithControllerProps<Partial<import("tamagui").SliderProps & import("react").RefAttributes<import("react-native/types").View>>, TValues>) => JSX.Element) & import("react").ForwardRefExoticComponent<import("tamagui").SliderProps & import("react").RefAttributes<import("react-native/types").View>> & {
        Track: import("react").ForwardRefExoticComponent<import("tamagui").SliderTrackProps & import("react").RefAttributes<HTMLElement | import("react-native/types").View>>;
        TrackActive: import("react").ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        }, "size"> & {
            readonly size?: any;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        }, "size"> & {
            readonly size?: any;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        }, "size"> & {
            readonly size?: any;
        }>>) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        } & {
            readonly size?: any;
        }, string | number> & {
            [x: string]: undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        } & {
            readonly size?: any;
        }, string | number> & {
            [x: string]: undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly orientation?: "vertical" | "horizontal" | undefined;
        } & {
            readonly size?: any;
        }, string | number> & {
            [x: string]: undefined;
        }>>, "ref">) & import("react").RefAttributes<import("react-native/types").View>>;
        Thumb: import("react").ForwardRefExoticComponent<import("@tamagui/slider/types/Slider").SliderThumbProps & import("react").RefAttributes<import("react-native/types").View>>;
    };
    Switch: ((props: WithControllerProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & {
        labeledBy?: string | undefined;
        name?: string | undefined;
        value?: string | undefined;
        checked?: boolean | undefined;
        defaultChecked?: boolean | undefined;
        required?: boolean | undefined;
        onCheckedChange?(checked: boolean): void;
    } & import("react").RefAttributes<import("react-native/types").View | HTMLButtonElement>>, TValues>) => JSX.Element) & import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & {
        labeledBy?: string | undefined;
        name?: string | undefined;
        value?: string | undefined;
        checked?: boolean | undefined;
        defaultChecked?: boolean | undefined;
        required?: boolean | undefined;
        onCheckedChange?(checked: boolean): void;
    } & import("react").RefAttributes<import("react-native/types").View | HTMLButtonElement>> & {
        Thumb: import("react").ForwardRefExoticComponent<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "size" | "unstyled"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("tamagui").SizeTokens | undefined;
        }>> & import("react").RefAttributes<HTMLSpanElement>>;
    };
    TextArea: ((props: WithControllerProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("react").RefAttributes<import("tamagui").TamaguiElement>>, TValues>) => JSX.Element) & import("@tamagui/web").ReactComponentWithRef<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<import("react-native/types").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native/types").TextInputProps> & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>>, import("tamagui").TamaguiElement> & {
        staticConfig: import("tamagui").StaticConfigParsed;
        extractable: <X>(a: X, opts?: Partial<import("tamagui").StaticConfig> | undefined) => X;
    } & {
        contextType: import("react").Context<any> | undefined;
        displayName: string | undefined;
        prototype: any;
        State: import("react-native/types").TextInputState;
    };
    Value: ((props: WithControllerProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>> & {
        name: string;
    }>, TValues>) => JSX.Element) & (({ name, ...props }: import("./Value").ValueProps) => JSX.Element);
    Field: ((props: WithControllerProps<Partial<{
        name: string;
    } & {
        children?: import("react").ReactNode;
    } & Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>>>, TValues>) => JSX.Element) & typeof FieldControlled;
    Message: ((props: WithControllerProps<Partial<import("./Message").MessageProps>, TValues>) => JSX.Element) & (({ name: nameProps, ...props }: import("./Message").MessageProps) => JSX.Element | null);
    Trigger: ((props: WithControllerProps<Partial<import("tamagui").FormTriggerProps>, TValues>) => JSX.Element) & ((props: import("tamagui").FormTriggerProps) => JSX.Element);
}>;
export {};
//# sourceMappingURL=createForm.d.ts.map