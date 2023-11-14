export type TListItem = {
    id: string;
    label: string;
    description?: string;
    link?: { linkLabel: string; link: string };
    action?: (args: any) => void;
};

export type TListItemIternal = {
    index: number;
    focusIndex: number;
    setFocusIndex?: (arg: any) => void;
} & TListItem;

export type ListProps = {
    data: TListItem[];
    ariaLabel?: string;
};
