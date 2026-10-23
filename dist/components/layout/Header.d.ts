import React from 'react';
export interface HeaderNotification {
    id: string | number;
    title: string;
    message: string;
    time?: string;
    read?: boolean;
}
export interface HeaderUser {
    name?: string;
    nombre?: string;
    username?: string;
    email?: string;
    role?: string;
    rol?: string;
    sede?: string;
    avatarUrl?: string;
    [key: string]: any;
}
export interface HeaderProps {
    portalTitle?: string;
    portalSubtitle?: string;
    user?: HeaderUser | null;
    onLogout?: () => void;
    notifications?: HeaderNotification[];
    unreadCount?: number;
    onNotificationClick?: (notif: HeaderNotification) => void;
    onMarkAllAsRead?: () => void;
    rightActions?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
