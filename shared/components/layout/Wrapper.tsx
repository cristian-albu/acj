import React from "react";
import "./layout.scss";
import { TWrapper } from "./types";

/**
 * Wrap components in order to provide a max-width
 */
const Wrapper: React.FC<TWrapper> = ({ children, leftAlign, ...rest }) => {
    return (
        <div className={`wrapper ${leftAlign && "left"}`} {...rest}>
            {children}
        </div>
    );
};

export default Wrapper;
