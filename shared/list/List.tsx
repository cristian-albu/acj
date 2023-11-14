"use client";
import React, { KeyboardEvent, useRef } from "react";
import ListItem from "./ListItem";
import { ListProps, TListItem } from "./types";
import useListNavigator from "../hooks/useListNavigator";

const List: React.FC<ListProps> = ({ data, ariaLabel }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { focusIndex, setFocusIndex, nextItem, prevItem } = useListNavigator(data);

    const eventHandlers = {
        onkeyDown: (event: KeyboardEvent<HTMLElement>) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                nextItem();
            }

            if (event.key === "ArrowUp") {
                event.preventDefault();
                prevItem();
            }
        },
    };

    return (
        <div role="listbox" tabIndex={0} aria-label={ariaLabel} ref={ref} onKeyDown={eventHandlers.onkeyDown}>
            {data.map(({ id, label, description }: TListItem, index: number) => {
                const props = {
                    id,
                    label,
                    description,
                    index,
                    focusIndex,
                    setFocusIndex: (arg: number) => setFocusIndex(arg),
                };
                return <ListItem key={id} {...props} />;
            })}
        </div>
    );
};

export default List;
