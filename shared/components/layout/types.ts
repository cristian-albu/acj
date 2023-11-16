import { HTMLAttributes } from "react";

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

export type TButton = {} & TChildren & HTMLAttributes<HTMLButtonElement>;

export type TCard = {
    width?: "full" | "half" | "third" | "quarter";
    tight?: boolean;
    hasHover?: boolean;
} & TChildren &
    HTMLAttributes<HTMLDivElement>;

export type TRow = {} & TChildren & HTMLAttributes<HTMLDivElement>;
