import { createContext, useContext } from "react";
import { FieldPath, FieldValues } from "react-hook-form";

export interface FieldContext<TPath extends FieldPath<FieldValues> = FieldPath<FieldValues>> {
  name: TPath;
}

export const fieldContext = createContext<FieldContext>({} as FieldContext);

export function useField<TFieldValues extends FieldValues = FieldValues>() {
  return useContext(fieldContext) as FieldContext<FieldPath<TFieldValues>>;
}
