import React from 'react';
import { LucideIcon } from 'lucide-react';
export interface InfoGridItem {
    label: string;
    value: React.ReactNode;
    icon: LucideIcon;
    highlight?: boolean;
    mono?: boolean;
    colSpan?: 1 | 2 | 3;
    type?: 'text' | 'pdf' | 'url';
    onClick?: () => void;
}
interface InfoGridProps {
    items: InfoGridItem[];
    columns?: 1 | 2 | 3;
    noDataMessage?: string;
    noDataIcon?: LucideIcon;
}
declare const InfoGrid: React.FC<InfoGridProps>;
export { InfoGrid };
export default InfoGrid;
