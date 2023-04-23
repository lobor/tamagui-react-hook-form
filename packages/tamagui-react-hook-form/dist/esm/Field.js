import { YStack } from "tamagui";
import { fieldContext } from "./fieldContext";
function FieldControlled({
  children,
  name,
  ...props
}) {
  return <fieldContext.Provider value={{ name }}><YStack {...props}>{children}</YStack></fieldContext.Provider>;
}
export {
  FieldControlled
};
//# sourceMappingURL=Field.js.map
