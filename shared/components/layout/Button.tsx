import React from "react";
import { TButton } from "./types";
import "./layout.scss";

const Button: React.FC<TButton> = ({ children, btnType, ...rest }) => {
    return (
        <button className={`button ${btnType}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
