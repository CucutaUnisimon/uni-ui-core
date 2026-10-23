import React from 'react';
import { LucideIcon } from 'lucide-react';
interface PageHeaderProps {
    title: string;
    description: string;
    icon: LucideIcon | React.ElementType;
    iconColor?: string;
    iconBgColor?: string;
    actionButton?: React.ReactNode;
}
declare const PageHeader: React.FC<PageHeaderProps>;
export { PageHeader };
export default PageHeader;
