import React from 'react';
import { MenuItem } from '../../types';
export interface SidebarProps {
    menuItems: MenuItem[];
    currentPath?: string;
    onNavigate?: (path: string) => void;
    logoSrc?: string;
    user?: {
        username?: string;
        email?: string;
    };
    onLogout?: () => void;
    LinkComponent?: React.ComponentType<{
        to: string;
        className?: string;
        title?: string;
        children: React.ReactNode;
    }>;
}
export declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
