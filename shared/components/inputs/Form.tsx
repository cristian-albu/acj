import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import { TDataState, TFormAction, TFormPropsObject, TInput } from "./types";
import "./input.scss";
import Button from "../layout/Button";

/**
 * Create a data structure that will generate a form with all of its inputs
 * Any action passed down will have access to the state of all of its inputs
 * @example
 * const formData: TFormProps = {
    header: { title: "My form", id: "formid", description: "This is a description" },
    inputs: [
        {
            id: "inputId1",
            label: "first input",
            type: "text",
            validationMethods: [
                { method: validateLength, methodArgs: [5, 10] }, 
                { method: validateSimpleText }
            ],
        },
        { id: "inputId2", label: "textarea input", type: "textarea", defaultValue: "Hello world" },
        { id: "inputId3", label: "Switch input", type: "switch", defaultChecked: false },
        { id: "inputId4", label: "password input", type: "password", defaultValue: "Hello world" },
        { id: "inputId5", label: "number input", type: "number", defaultValue: 15 },
    ],
    action: {btnText: "Submit", action: (args) => console.log("Action fired")},
};
};
 */
const Form: React.FC<TFormPropsObject> = ({ formProps }) => {
    const { headerData, inputData, actionData } = formProps;

    const initialProps: TDataState = inputData.reduce(
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
        onSubmit: (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        },
    };

    return (
        <form className="form" onChange={eventHandlers.onChange} id={headerData?.id} onSubmit={eventHandlers.onSubmit}>
            <span className={`header ${headerData?.align}`}>
                {headerData?.icon} <h3>{headerData?.title}</h3>
            </span>
            <p>{headerData?.description}</p>
            {inputData.map((props: TInput) => {
                return <Input key={props.id} {...props} />;
            })}

            <div className={`actions ${actionData.align}`}>
                {actionData.actions.map((action: TFormAction) => {
                    return (
                        <Button
                            key={action.btnText}
                            onClick={() => action.action(data)}
                            disabled={action.btnDisabled}
                            btnType={action.btnType}
                        >
                            {action.btnIcon}
                            {action.btnText}
                        </Button>
                    );
                })}
            </div>
        </form>
    );
};

export default Form;
