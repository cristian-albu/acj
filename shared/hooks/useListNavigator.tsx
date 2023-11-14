"use client";
import { useState } from "react";
import { TListItem } from "../list/types";

export const useListNavigator = (list: TListItem[]) => {
    const [focusIndex, setFocusIndex] = useState(-1);

    const nextItem = () => {
        if (focusIndex != list.length - 1) {
            setFocusIndex(focusIndex + 1);
        }
    };

    const prevItem = () => {
        if (focusIndex > 0) {
            setFocusIndex(focusIndex - 1);
        }
    };

    return { focusIndex, setFocusIndex, nextItem, prevItem };
};

export default useListNavigator;
