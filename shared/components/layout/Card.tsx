"use client";
import React from "react";
import "./layout.scss";
import { TCard, TCardDiv, TCardForm } from "./types";

/**
 * Wrap components in order to provide a max-width
 * @param width - (optional) "full" | "half" | "third" | "quarter"
 * @param tight - (optional) boolean value that makes the padding be greater or smaller
 * @returns
 */
const Card: React.FC<TCard> = ({ children, width, tight, hasHover, isFormElement, ...rest }) => {
    const styling = `card ${width} ${tight && "tight"} ${hasHover && "cardHover"}`;

    if (isFormElement) {
        return (
            <form className={styling} {...(rest as TCardForm)}>
                {children}
            </form>
        );
    } else {
        return (
            <div className={styling} {...(rest as TCardDiv)}>
                {children}
            </div>
        );
    }
};

export default Card;
