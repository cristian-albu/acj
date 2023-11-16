import React from "react";
import "./layout.scss";
import { TRow } from "./types";
const Row: React.FC<TRow> = ({ children, ...rest }) => {
    return (
        <div className="row" {...rest}>
            {children}
        </div>
    );
};

export default Row;
