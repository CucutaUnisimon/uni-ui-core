import React, { ReactNode } from 'react';
interface SelectionListItemProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    labelTag?: string;
}
/**
 * SelectionListItem — Un item de lista optimizado para selección (con switch).
 * Diseñado para ser altamente legible y estético.
 */
declare const SelectionListItem: React.FC<SelectionListItemProps>;
export default SelectionListItem;
