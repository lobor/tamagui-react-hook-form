/// <reference types="react" />
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormProps, Merge, StaticProps, WithControllerProps } from "./types";
type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps> ? TProps : TComponentOrTProps;
type RecordExtend<TExtendsComponent extends {
    [key: string]: CustomFieldControlled<any>;
} = {
    [key: string]: CustomFieldControlled<any>;
}, TValues extends FieldValues = FieldValues> = {
    [key in keyof TExtendsComponent]: (props: WithControllerProps<Partial<ExtractProps<TExtendsComponent[key]["component"]>>, TValues>) => JSX.Element;
};
type CustomFieldControlled<El> = {
    component: El;
    mapProps?: Partial<Record<keyof ControllerRenderProps, ExtractProps<El>>>;
};
export declare function createForm<TValues extends FieldValues, ExtendsComponent extends {
    [key: string]: CustomFieldControlled<any>;
} = {
    [key: string]: CustomFieldControlled<any>;
}>(extendsComponent?: ExtendsComponent): Merge<(params: FormProps<TValues>) => JSX.Element, StaticProps<TValues> & RecordExtend<ExtendsComponent, TValues>>;
export {};
//# sourceMappingURL=Form.d.ts.map