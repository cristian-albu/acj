"use client";
import Input from "@/shared/components/inputs/Input";
import { TInput } from "@/shared/components/inputs/types";
import Button from "@/shared/components/layout/Button";
import Card from "@/shared/components/layout/Card";
import Section from "@/shared/components/layout/Section";
import Wrapper from "@/shared/components/layout/Wrapper";
import { validateEmail } from "@/shared/utils/inputValidation";
import React, { ChangeEvent, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const emailInput: TInput = {
    id: "admin-email",
    label: "email",
    type: "text",
    icon: <MdOutlineEmail />,
    validationMethods: [{ method: validateEmail }],
};

const passwordInput: TInput = {
    id: "admin-password",
    label: "password",
    type: "password",
    icon: <RiLockPasswordLine />,
};

const AdminLoginView: React.FC = () => {
    const [loginState, setLoginState] = useState({ [emailInput.id]: "", [emailInput.id]: "" });
    const [processing, setProcessing] = useState(false);
    const [errorState, setErrorState] = useState("");

    const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
        setLoginState({ ...loginState, [event.target.id]: event.target.value });
    };

    const handleSubmit = async () => {
        setProcessing(true);
        try {
            const fetchRes = await fetch("/api/admin/login", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginState),
            });

            const parsedRes = await fetchRes.json();

            setProcessing(false);

            if (fetchRes.status === 200) {
                console.log("ok", parsedRes);
            } else {
                setErrorState("Server error");
            }
        } catch (error) {
            setErrorState("Error making the request");
            setProcessing(false);
        }
    };

    errorState && console.error(errorState);
    return (
        <Section>
            <Wrapper>
                <Card width="half" isFormElement={true} onChange={handleChange} onSubmit={(e: any) => e.preventDefault()}>
                    <Input {...emailInput} />
                    <Input {...passwordInput} />
                    <Button onClick={handleSubmit} disabled={processing}>
                        Login
                    </Button>
                </Card>
            </Wrapper>
        </Section>
    );
};

export default AdminLoginView;
