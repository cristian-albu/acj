"use client";
import React, { useEffect, useRef } from "react";
import { TListItemIternal } from "./types";

const ListItem: React.FC<TListItemIternal> = ({ id, description, label, index, focusIndex }) => {
    const ref = useRef<null | HTMLLIElement>(null);

    useEffect(() => {
        if (focusIndex === index && ref.current) {
            ref.current.focus();
        }
    }, [focusIndex]);

    return (
        <li
            id={id}
            role="option"
            tabIndex={focusIndex === index ? 0 : -1}
            ref={ref}
            aria-label={label}
            aria-selected={focusIndex === index}
        >
            {label}
        </li>
    );
};

export default ListItem;
