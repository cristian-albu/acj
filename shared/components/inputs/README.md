To add ..

## Form component

Pass a structure to build a form dynamically.The `formData` structure has 3 parts:

-   `header` - here you can define the title, id, and description of the whole form
-   `input list` - here you can define an input list based on an `input object`
-   `action` - here you can define the action that will be triggered by the form button, alongside the button's text. The action function will receive all the form data from the inputs.

```ts
const formData: TFormProps = {
    header: { title: "My form", id: "formid", description: "This is a description" },
    inputs: [
        {
            id: "inputId1",
            label: "first input",
            icon: "✅",
            type: "text",
            validationMethods: [{ method: validateLength, methodArgs: [5, 10] }, { method: validateSimpleText }],
        },
    ],
    action: { btnText: "Send", action: () => console.log("data") },
};

const otherInputsExamples = [
    { id: "inputId2", label: "textarea input", type: "textarea", defaultValue: "Hello world" }, // defaultValue in case the type is not switch
    { id: "inputId3", label: "Switch input", type: "switch", defaultChecked: false }, // defaultChecked in case the type is switch
    { id: "inputId4", label: "password input", type: "password", defaultValue: "Hello world" },
    { id: "inputId5", label: "number input", type: "number" },
];
```

```ts
<Form formData={formData} />
```

## Input

```ts
const inputObject = {
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
```

```ts
<Input {...inputObject} />
```
