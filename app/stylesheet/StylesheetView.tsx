"use client";
import Form from "@/shared/components/inputs/Form";
import { TFormProps } from "@/shared/components/inputs/types";
import Card from "@/shared/components/layout/Card";
import Row from "@/shared/components/layout/Row";
import Section from "@/shared/components/layout/Section";
import Wrapper from "@/shared/components/layout/Wrapper";
import { validateLength, validateSimpleText } from "@/shared/utils/inputValidation";

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
        { id: "inputId2", label: "textarea input", type: "textarea", defaultValue: "Hello world" },
        { id: "inputId3", label: "Switch input", type: "switch", defaultChecked: false },
        { id: "inputId4", label: "password input", type: "password", defaultValue: "Hello world" },
        { id: "inputId5", label: "number input", type: "number", defaultValue: 15 },
    ],
    action: { btnText: "Send", action: () => console.log("data") },
};

const cardData = [
    { id: "id1", title: "Card", description: "This is a card" },
    { id: "id2", title: "Card", description: "This is a card" },
    { id: "id3", title: "Card", description: "This is a card" },
    { id: "id4", title: "Card", description: "This is a card" },
    { id: "id5", title: "Card", description: "This is a card" },
    { id: "id6", title: "Card", description: "This is a card" },
];

const Stylesheet = () => {
    return (
        <>
            <Section animation={true}>
                <Wrapper>
                    <Card width="half">
                        <Form formProps={formData} />
                    </Card>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper leftAlign={true}>
                    <h2>Half</h2>
                    <Row>
                        {cardData.map(({ id, title, description }: any) => (
                            <Card key={id} width="half" tight={true}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Card>
                        ))}
                    </Row>
                    <h2>Thirds</h2>
                    <Row>
                        {cardData.map(({ id, title, description }: any) => (
                            <Card key={id} width="third" tight={true} hasHover={true}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Card>
                        ))}
                    </Row>
                    <h2>Quarter</h2>
                    <Row>
                        {cardData.map(({ id, title, description }: any) => (
                            <Card key={id} width="quarter" tight={true}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Card>
                        ))}
                    </Row>
                </Wrapper>
            </Section>
        </>
    );
};

export default Stylesheet;
