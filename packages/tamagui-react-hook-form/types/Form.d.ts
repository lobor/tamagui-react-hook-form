/// <reference types="react" />
import { FieldValues } from 'react-hook-form';
import { FormProps } from './types';
declare function FormComponent<TValues extends FieldValues>({ onSubmit, mode, reValidateMode, defaultValues, values, resetOptions, resolver, context, shouldFocusError, shouldUnregister, shouldUseNativeValidation, criteriaMode, delayError, fRef, ...formProps }: FormProps<TValues>): JSX.Element;
export { FormComponent };
//# sourceMappingURL=Form.d.ts.map