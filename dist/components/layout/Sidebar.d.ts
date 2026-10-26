import React from 'react';
import { MenuItem } from '../../types';
export interface SidebarUser {
    name?: string;
    nombre?: string;
    username?: string;
    email?: string;
    rol?: string;
    role?: string;
    avatarUrl?: string;
    foto?: string;
    [key: string]: any;
}
export interface SidebarProps {
    menuItems: MenuItem[];
    currentPath?: string;
    onNavigate?: (path: string) => void;
    logoSrc?: string;
    user?: SidebarUser | null;
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
