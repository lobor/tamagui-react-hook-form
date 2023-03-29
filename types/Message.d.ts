/// <reference types="react" />
import { GetProps } from 'tamagui';
import { FieldValues } from 'react-hook-form';
declare const MessageText: import("tamagui").TamaguiComponent<(Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("tamagui").FontSizeTokens | undefined;
} & import("@tamagui/web").MediaProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("tamagui").FontSizeTokens | undefined;
}>> & import("@tamagui/web").PseudoProps<Partial<Omit<any, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("tamagui").FontSizeTokens | undefined;
}>>) | (Omit<ReactTextProps, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("tamagui").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/web").MediaProps<Partial<Omit<ReactTextProps, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("tamagui").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/web").PseudoProps<Partial<Omit<ReactTextProps, string | number | symbol> & import("@tamagui/web").ExtendsBaseTextProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("tamagui").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>), any, import("tamagui").TextPropsBase, {
    readonly size?: import("tamagui").FontSizeTokens | undefined;
} | ({
    readonly size?: import("tamagui").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})>;
export type MessageProps = GetProps<typeof MessageText> & {
    name: keyof FieldValues;
};
export declare const Message: ({ name, ...props }: MessageProps) => JSX.Element | null;
export {};
//# sourceMappingURL=Message.d.ts.map