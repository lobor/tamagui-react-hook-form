import { Form } from "tamagui";
import { useFormState } from "react-hook-form";
const Trigger = (props) => {
  const { isValid } = useFormState();
  return <Form.Trigger disabled={!isValid} {...props} />;
};
export {
  Trigger
};
//# sourceMappingURL=Trigger.js.map
