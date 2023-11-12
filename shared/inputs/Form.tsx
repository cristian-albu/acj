"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import { TDataState, TFormPropsObject, TInput } from "./types";
import styles from "@/shared/inputs/inputs.module.scss";

/**
 * Create a data structure that will generate a form with all of its inputs
 * Any action passed down will have access to the state of all of its inputs
 * @example
 * const formData: TFormProps = {
    header: { title: "My form", id: "formid", description: "This is a description" },
    inputs: [
        { id: "inputId1", label: "first input", type: "text", defaultValue: "" },
        { id: "inputId2", label: "textarea input", type: "textarea", defaultValue: "Hello world" },
        { id: "inputId3", label: "Switch input", type: "switch", defaultChecked: false },
        { id: "inputId4", label: "password input", type: "password", defaultValue: "Hello world" },
    ],
    action: () => console.log("data"),
};
 */
const Form: React.FC<TFormPropsObject> = ({ formProps }) => {
    const { header, inputs, action } = formProps;

    const initialProps: TDataState = inputs.reduce(
        (obj, input) => ({ ...obj, [input.id]: input.type === "switch" ? input.defaultChecked : input.defaultValue }),
        {}
    );

    const [data, setData] = useState<TDataState>(initialProps);

    const eventHandlers = {
        onChange: (event: ChangeEvent<HTMLFormElement>) => {
            let value;

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

            setData({ ...data, [event.target.id]: value });
        },
        onFocus: () => {},
        onBlur: () => {},
        onsubmit: () => {},
    };

    const handleAction = () => {};

    return (
        <form className={styles.form} onChange={eventHandlers.onChange} id={header?.id}>
            <h3>{header?.title}</h3>
            <p>{header?.description}</p>
            {inputs.map((props: TInput) => {
                return <Input key={props.id} {...props} />;
            })}
        </form>
    );
};

export default Form;
