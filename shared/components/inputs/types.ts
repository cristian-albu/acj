import React, { HTMLAttributes } from "react";

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
    icon?: React.ReactNode;
    validationMethods?: TValidationMethod[];
} & (TTextInput | TSwitch) &
    HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type TFormAction = {
    btnText: string;
    action: (data: any) => void;
};

export type TFormProps = {
    header?: TFormHeader;
    inputs: TInput[];
    action: TFormAction;
};

export type TFormPropsObject = {
    formProps: TFormProps;
};

export type TDataState = { [key: string]: string | number | boolean | undefined };
