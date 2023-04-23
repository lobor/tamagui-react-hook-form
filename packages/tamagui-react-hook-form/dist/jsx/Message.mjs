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
  const { name: nameField } = useField();
  const name = nameProps ?? nameField;
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name });
  return useMemo(
    () => errors[name]?.message ? <MessageText {...props}>{errors[name]?.message}</MessageText> : null,
    [errors[name]?.message]
  );
};
export {
  Message
};
//# sourceMappingURL=Message.mjs.map
