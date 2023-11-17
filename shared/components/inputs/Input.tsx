import React, { ChangeEvent, useState } from "react";
import { TInput, TValidationMethod } from "./types";
import "./input.scss";

/**
 * 
 * @example
 * 
 * const inputObject:TInput = {
    id: "input id", // Make sure each id is unique
    label: "Visible label",
    icon: "Optional icon (can be string or a React Node)", // Optional type
    type: "text" | "textarea" | "password" | "number",
    defaultValue: "Hello world",
    validationMethods: [
        {
            method: validateLength, // A callback that will grab the input value as the first argument and the rest of the methodArg
            methodArgs: [5, 10], // Rest of the arguments that will be passed to the callback
        },
        {
            method: validateSimpleText, // If the callback only needs the value from the input, you can skip the rest of the arguments.
        },
    ],
};
 */
const Input: React.FC<TInput> = ({ id, label, icon, type, validationMethods, defaultValue, defaultChecked, ...rest }) => {
    const [errorModel, setErrorModel] = useState({ focused: false, blurred: false, initial: false, errors: [] as string[] });

    const validationCallback = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        let value: string | number | boolean | undefined;
        switch (event.target.type) {
            case "checkbox":
                value = event.target.checked;
                break;
            case "number":
                value = Number(event.target.value);
                break;
            default:
                value = event.target.value;
        }

        const errorList: string[] = [];
        validationMethods?.forEach(({ method, methodArgs = [] }: TValidationMethod) => {
            const errObj = method(value, ...(methodArgs as []));
            if (!errObj.isValid) {
                errorList.push(errObj.error);
            }
        });

        setErrorModel({ ...errorModel, errors: errorList });
    };

    const commonInputPropsAndHandlers = {
        id,
        name: label,
        onChange: validationCallback,
        onBlur: () => {
            setErrorModel({ ...errorModel, focused: false, blurred: true, initial: true });
        },
        onFocus: () => {
            setErrorModel({ ...errorModel, focused: true, blurred: false });
        },
    };

    if (type === "switch") {
        return (
            <label className="switchLabel">
                <input
                    className={`switch ${errorModel.errors.length > 0 && "inputError"}`}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    {...commonInputPropsAndHandlers}
                    {...rest}
                />
                <div className="switch" />
                <p className="switchLabelP">{label}</p>
                {errorModel.errors.length > 0 && errorModel.focused && errorModel.initial && (
                    <InputError errors={errorModel.errors} />
                )}
            </label>
        );
    } else if (type === "textarea") {
        return (
            <label className="label">
                <span>
                    {icon} <p className="labelP">{label}</p>
                </span>
                <textarea
                    className={`input ${errorModel.errors.length > 0 && "inputError"}`}
                    defaultValue={defaultValue}
                    {...commonInputPropsAndHandlers}
                    {...rest}
                />
                {errorModel.errors.length > 0 && errorModel.focused && errorModel.initial && (
                    <InputError errors={errorModel.errors} />
                )}
            </label>
        );
    } else {
        return (
            <label className="label">
                <span>
                    {icon} <p className="labelP">{label}</p>
                </span>
                <input
                    className={`input ${errorModel.errors.length > 0 && "inputError"}`}
                    type={type}
                    defaultValue={defaultValue}
                    {...commonInputPropsAndHandlers}
                    {...rest}
                />
                {errorModel.errors.length > 0 && errorModel.focused && errorModel.initial && (
                    <InputError errors={errorModel.errors} />
                )}
            </label>
        );
    }
};

export default Input;

const InputError: React.FC<{ errors: string[] }> = ({ errors }) => {
    return (
        <div className="errorList">
            {errors.map((e: string) => (
                <p key={e}>🚩{e}</p>
            ))}
        </div>
    );
};
