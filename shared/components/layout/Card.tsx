import React from "react";
import "./layout.scss";
import { TCard } from "./types";

/**
 * Wrap components in order to provide a max-width
 * @param width - (optional) "full" | "half" | "third" | "quarter"
 * @param tight - (optional) boolean value that makes the padding be greater or smaller
 * @returns
 */
const Card: React.FC<TCard> = ({ children, width, tight, hasHover, ...rest }) => {
    return (
        <div className={`card ${width} ${tight && "tight"} ${hasHover && "cardHover"}`} {...rest}>
            {children}
        </div>
    );
};

export default Card;
