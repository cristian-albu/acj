"use client";
import React, { ChangeEvent, useState } from "react";
import { TInput, TValidationMethod } from "./types";
import styles from "@/shared/inputs/inputs.module.scss";

const Input: React.FC<TInput> = ({ id, label, type, validationMethods, defaultValue, defaultChecked, ...rest }) => {
    const [errorState, setErrorState] = useState<string[]>([]);

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
        validationMethods?.forEach(({ method, methodArgs }: TValidationMethod) => {
            const errObj = method(value, ...(methodArgs as []));
            if (!errObj.isValid) {
                errorList.push(errObj.error);
            }
        });

        setErrorState(errorList);
    };

    const commonInputPropsAndHandlers = {
        id,
        name: label,
        onchange: validationCallback,
    };

    if (type === "switch") {
        return (
            <label className={styles.switchLabel}>
                <p className={styles.switchLabelP}>{label}</p>
                <input
                    className={styles.switch}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    {...commonInputPropsAndHandlers}
                    {...rest}
                />
            </label>
        );
    } else if (type === "textarea") {
        return (
            <label className={styles.label}>
                <p className={styles.labelP}>{label}</p>
                <textarea className={styles.input} defaultValue={defaultValue} {...commonInputPropsAndHandlers} {...rest} />
            </label>
        );
    } else {
        return (
            <label className={styles.label}>
                <p className={styles.labelP}>{label}</p>
                <input
                    className={styles.input}
                    type={type}
                    defaultValue={defaultValue}
                    {...commonInputPropsAndHandlers}
                    {...rest}
                />
            </label>
        );
    }
};

export default Input;
