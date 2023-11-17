import { ButtonHTMLAttributes, DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes } from "react";

export type TChildren = {
    children: React.ReactNode;
};

export type TSection = {
    type?: "dark" | "light";
    animation?: boolean;
} & TChildren &
    HTMLAttributes<HTMLDivElement>;

export type TWrapper = {
    leftAlign?: boolean;
} & TChildren &
    HTMLAttributes<HTMLDivElement>;

export type TButton = {} & TChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export type TCard = {
    width?: "full" | "half" | "third" | "quarter";
    tight?: boolean;
    hasHover?: boolean;
    isFormElement?: boolean;
} & TChildren &
    (TCardDiv | TCardForm);

export type TCardDiv = HTMLAttributes<HTMLDivElement>;

export type TCardForm = { isFormElement?: true } & FormHTMLAttributes<HTMLFormElement>;

export type TRow = {} & TChildren & HTMLAttributes<HTMLDivElement>;
