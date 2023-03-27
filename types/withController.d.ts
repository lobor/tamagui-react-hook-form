import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { WithControllerProps } from './types';
export declare function withController<TProps, TFieldValues extends FieldValues = FieldValues>(Component: React.JSXElementConstructor<TProps>, mapProps?: Partial<Record<keyof ControllerRenderProps, keyof TProps>>): React.ForwardRefExoticComponent<React.PropsWithoutRef<WithControllerProps<Partial<TProps>, TFieldValues>> & React.RefAttributes<unknown>>;
//# sourceMappingURL=withController.d.ts.map