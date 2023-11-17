import React, { HTMLAttributes } from "react";

export type TFormHeader = {
    title?: string;
    id?: string;
    description?: string;
    icon?: any;
    align?: "mid" | "start" | "end";
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
    /** This will be used as a key for the state in the Form Component. You should match it with the target of your data.
     * If you want to send data to the server as json you could think of it as {'id' : 'value'} */
    id: string;
    label: string;
    icon?: React.ReactNode;
    validationMethods?: TValidationMethod[];
} & (TTextInput | TSwitch) &
    HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type TFormAction = {
    btnText: string;
    action: (data: any) => void;
    btnIcon?: any;
    btnType?: "primary" | "secondary";
    btnDisabled?: boolean;
};

export type TFormActions = {
    actions: TFormAction[];
    align?: "mid" | "start" | "end" | "between";
};

export type TFormProps = {
    headerData?: TFormHeader;
    inputData: TInput[];
    actionData: TFormActions;
};

export type TFormPropsObject = {
    formProps: TFormProps;
};

export type TDataState = { [key: string]: string | number | boolean | undefined };
