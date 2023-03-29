/// <reference types="react" />
export declare const SelectControlled: import("react").ForwardRefExoticComponent<Omit<import("react-hook-form").ControllerProps<import("react-hook-form").FieldValues, string>, "name" | "control" | "render"> & {
    name?: string | undefined;
} & Omit<Partial<import("@tamagui/select/types/types").ScopedProps<import("tamagui").SelectProps>>, "name"> & import("react").RefAttributes<unknown>> & {
    Trigger: import("react").ForwardRefExoticComponent<Omit<import("tamagui").TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("react").RefAttributes<any>>;
    Value: import("react").ForwardRefExoticComponent<((Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>> & {
        placeholder?: import("react").ReactNode;
    }) | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & {
        placeholder?: import("react").ReactNode;
    }, "ref"> | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & {
        placeholder?: import("react").ReactNode;
    }, "ref"> | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & {
        placeholder?: import("react").ReactNode;
    }, "ref">) & import("react").RefAttributes<any>>;
    Content: ({ children, __scopeSelect, zIndex, ...focusScopeProps }: {
        children?: import("react").ReactNode;
        zIndex?: number | undefined;
    } & {
        __scopeSelect?: import("tamagui").Scope<any>;
    } & import("@tamagui/focus-scope").FocusScopeProps) => JSX.Element | null;
    Viewport: import("react").ForwardRefExoticComponent<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless"> & {
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
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless"> & {
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
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless"> & {
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
    } & import("react").RefAttributes<any>>;
    Group: import("react").ForwardRefExoticComponent<((Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>>) | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & import("react").RefAttributes<any>>;
    Item: import("react").ForwardRefExoticComponent<import("tamagui").SelectItemProps & import("react").RefAttributes<any>>;
    Label: import("react").ForwardRefExoticComponent<Omit<import("tamagui").TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("react").RefAttributes<any>>;
    ItemText: import("react").ForwardRefExoticComponent<((Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }>>) | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
        readonly size?: import("tamagui").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & import("react").RefAttributes<any>>;
    ItemIndicator: import("react").ForwardRefExoticComponent<((Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>>) | Omit<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & import("react").RefAttributes<any>>;
    ScrollUpButton: import("react").ForwardRefExoticComponent<import("tamagui").SelectScrollButtonProps & import("react").RefAttributes<any>>;
    ScrollDownButton: import("react").ForwardRefExoticComponent<import("tamagui").SelectScrollButtonProps & import("react").RefAttributes<any>>;
    Sheet: import("react").FunctionComponent<Omit<import("@tamagui/sheet/types/types").SheetProps, "open" | "onOpenChange"> & import("react").RefAttributes<any>> & {
        Handle: ({ __scopeSheet, ...props }: import("@tamagui/sheet/types/types").SheetScopedProps<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>>>) => JSX.Element;
        Frame: import("react").ForwardRefExoticComponent<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }>> & {
            __scopeSheet?: import("tamagui").Scope<any>;
        } & import("react").RefAttributes<unknown>>;
        Overlay: ({ __scopeSheet, ...props }: import("@tamagui/sheet/types/types").SheetScopedProps<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "closed"> & {
            readonly closed?: boolean | undefined;
        } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "closed"> & {
            readonly closed?: boolean | undefined;
        }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("tamagui").SizeTokens | undefined;
        }, "closed"> & {
            readonly closed?: boolean | undefined;
        }>>>) => JSX.Element;
        ScrollView: import("react").ForwardRefExoticComponent<any>;
    };
    Adapt: (({ platform, when, children }: import("tamagui").AdaptProps) => any) & {
        Contents: {
            (props: any): import("react").FunctionComponentElement<any>;
            shouldForwardSpace: boolean;
        };
    };
    Icon: import("tamagui").TamaguiComponent<(Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{}, "elevation" | "fullscreen"> & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }>>) | (Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>), any, Omit<any, string | number | symbol> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } | ({
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })>;
};
//# sourceMappingURL=Select.d.ts.map