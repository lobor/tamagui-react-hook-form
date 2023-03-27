/// <reference types="react" />
import { GetProps } from 'tamagui';
import { FieldValues } from 'react-hook-form';
declare const MessageText: any;
export type MessageProps = GetProps<typeof MessageText> & {
    name: keyof FieldValues;
};
export declare const Message: ({ name, ...props }: MessageProps) => JSX.Element | null;
export {};
//# sourceMappingURL=Message.d.ts.map