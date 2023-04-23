import { SizableText } from "tamagui";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useField } from "./fieldContext";
const Value = ({ name, ...props }) => {
  const { name: nameField } = useField();
  const { watch } = useFormContext();
  const value = watch(name ?? nameField);
  return useMemo(() => <SizableText {...props}>{value}</SizableText>, [value, props]);
};
export {
  Value
};
//# sourceMappingURL=Value.mjs.map
