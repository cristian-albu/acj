"use client";
import Form from "@/shared/components/inputs/Form";
import { TFormProps } from "@/shared/components/inputs/types";
import Card from "@/shared/components/layout/Card";
import Section from "@/shared/components/layout/Section";
import Wrapper from "@/shared/components/layout/Wrapper";
import { validateEmail } from "@/shared/utils/inputValidation";
import React, { useState } from "react";
import { MdOutlineEmail, MdLogin } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUnlock } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

type TLoginDefaultState = {
    state: "default";
};

type TLoginLoadingState = {
    state: "loading";
};

type TLoginErrorState = {
    state: "error";
    error: any;
};

type TLoginSuccessState = {
    state: "success";
};

type TLoginState = TLoginDefaultState | TLoginLoadingState | TLoginErrorState | TLoginSuccessState;

const AdminLoginView: React.FC = () => {
    const [loginState, setLoadingState] = useState<TLoginState>({ state: "default" });

    const handleEmailLogin = async (data: any) => {
        setLoadingState({ state: "loading" });
        try {
            const fetchRes = await fetch("/api/admin/login", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const parsedRes = await fetchRes.json();
            // get the user session id and other user data. Maybe set a context with the credentials or the cookies

            if (fetchRes.status === 200) {
                setLoadingState({ state: "success" });
            } else {
                setLoadingState({ state: "error", error: "Server error" });
            }
        } catch (error) {
            setLoadingState({ state: "error", error: error });
        }
    };

    const formData: TFormProps = {
        headerData: { title: "Login-form", icon: <FiUnlock />, align: "mid" },
        inputData: [
            {
                id: "admin-email",
                label: "email",
                type: "text",
                icon: <MdOutlineEmail />,
                validationMethods: [{ method: validateEmail }],
            },
            {
                id: "admin-password",
                label: "password",
                type: "password",
                icon: <RiLockPasswordLine />,
            },
        ],
        actionData: {
            align: "start",
            actions: [
                {
                    btnText: "Login",
                    action: handleEmailLogin,
                    btnDisabled: loginState.state === "loading",
                    btnIcon: <MdLogin />,
                },
                {
                    btnText: "Github",
                    action: handleEmailLogin,
                    btnDisabled: loginState.state === "loading",
                    btnIcon: <FaGithub />,
                    btnType: "secondary",
                },
            ],
        },
    };

    loginState.state === "error" && console.error(loginState.error);
    return (
        <Section animation={true} fullScreen={true}>
            <Wrapper>
                <Card width="half">{loginState.state != "success" ? <Form formProps={formData} /> : <>✅ Success!</>}</Card>
            </Wrapper>
        </Section>
    );
};

export default AdminLoginView;
