/// <reference types="react" />
import { FieldPath, FieldValues } from "react-hook-form";
export interface FieldContext<TPath extends FieldPath<FieldValues> = FieldPath<FieldValues>> {
    name: TPath;
}
export declare const fieldContext: import("react").Context<FieldContext<string>>;
export declare function useField<TFieldValues extends FieldValues = FieldValues>(): FieldContext<FieldPath<TFieldValues>>;
//# sourceMappingURL=fieldContext.d.ts.map