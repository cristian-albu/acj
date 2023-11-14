"use client";
import Form from "@/shared/inputs/Form";
import React from "react";
import { TFormProps } from "@/shared/inputs/types";
import List from "@/shared/list/List";
import { ListProps } from "@/shared/list/types";
import { validateLength, validateSimpleText } from "@/lib/validation/inputValidation";

const formData: TFormProps = {
    header: { title: "My form", id: "formid", description: "This is a description" },
    inputs: [
        {
            id: "inputId1",
            label: "first input",
            type: "text",
            validationMethods: [{ method: validateLength, methodArgs: [5, 10] }, { method: validateSimpleText }],
        },
        { id: "inputId2", label: "textarea input", type: "textarea", defaultValue: "Hello world" },
        { id: "inputId3", label: "Switch input", type: "switch", defaultChecked: false },
        { id: "inputId4", label: "password input", type: "password", defaultValue: "Hello world" },
        { id: "inputId5", label: "number input", type: "number", defaultValue: 15 },
    ],
    action: () => console.log("data"),
};

const listData: ListProps = {
    ariaLabel: "List aria label",
    data: [
        { id: "1", label: "First" },
        { id: "2", label: "second" },
    ],
};

const HomeView = () => {
    return (
        <div>
            <Form formProps={formData} />
            <List {...listData} />
        </div>
    );
};

export default HomeView;
