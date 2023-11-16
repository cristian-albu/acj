import React from "react";
import { TButton } from "./types";
import "./layout.scss";

const Button: React.FC<TButton> = ({ children, ...rest }) => {
    return (
        <button className="button" {...rest}>
            {children}
        </button>
    );
};

export default Button;
