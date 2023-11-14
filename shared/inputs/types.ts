import { HTMLAttributes } from "react";

export type TFormHeader = {
    title?: string;
    id?: string;
    description?: string;
};

export type TValidationMethodObject = {
    isValid: boolean;
    error: string;
};

export type TValidationMethod = {
    method: (args: any) => TValidationMethodObject;
    methodArgs?: (string | number)[];
};

export type TSwitch = {
    defaultChecked?: boolean;
    type: "switch";
};

export type TTextInput = {
    defaultvalue?: string | number;
    type: "text" | "textarea" | "password" | "number";
};

export type TInput = {
    id: string;
    label: string;
    validationMethods?: TValidationMethod[];
} & (TTextInput | TSwitch) &
    HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type TFormProps = {
    header?: TFormHeader;
    inputs: TInput[];
    action: (data: any) => void;
};

export type TFormPropsObject = {
    formProps: TFormProps;
};

export type TDataState = { [key: string]: string | number | boolean | undefined };
