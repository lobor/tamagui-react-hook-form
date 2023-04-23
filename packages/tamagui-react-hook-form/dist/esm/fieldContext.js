import { createContext, useContext } from "react";
const fieldContext = createContext({});
function useField() {
  return useContext(fieldContext);
}
export {
  fieldContext,
  useField
};
//# sourceMappingURL=fieldContext.js.map
