import { SizableText, styled } from "tamagui";
import { useMemo } from "react";
import {
  useFormContext,
  useFormState
} from "react-hook-form";
import { useField } from "./fieldContext";
const MessageText = styled(SizableText, {
  name: "FormMessageText",
  color: "red"
});
const Message = ({ name: nameProps, ...props }) => {
  var _a;
  const { name: nameField } = useField();
  const name = nameProps ?? nameField;
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name });
  return useMemo(
    () => {
      var _a2, _b;
      return ((_a2 = errors[name]) == null ? void 0 : _a2.message) ? <MessageText {...props}>{(_b = errors[name]) == null ? void 0 : _b.message}</MessageText> : null;
    },
    [(_a = errors[name]) == null ? void 0 : _a.message]
  );
};
export {
  Message
};
//# sourceMappingURL=Message.js.map
