import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useField } from "./fieldContext";
import { composeEventHandlers } from "tamagui";
function withController(Component, mapProps) {
  return forwardRef(function controlled(props, ref) {
    const { control } = useFormContext();
    const { name: nameContext } = useField();
    const { name, rules, shouldUnregister, defaultValue, ...propsComponent } = props;
    return <Controller
      control={control}
      name={name ?? nameContext}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref: innerRef, ...field }, ...other }) => {
        const propsMapped = Object.keys(field).reduce((acc, keyFrom) => {
          const keyTo = mapProps[keyFrom];
          const propFrom = field[keyFrom];
          acc[keyTo ?? keyFrom] = (keyTo == null ? void 0 : keyTo.match(/^on/g)) ? composeEventHandlers(propFrom, props[keyTo], { checkDefaultPrevented: false }) : propFrom;
          return acc;
        }, {});
        return <Component ref={innerRef} {...propsComponent} {...propsMapped} />;
      }}
    />;
  });
}
export {
  withController
};
//# sourceMappingURL=withController.js.map
