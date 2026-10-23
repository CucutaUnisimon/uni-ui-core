import React from 'react';
export interface HeaderNotification {
    id: string | number;
    title: string;
    message: string;
    time?: string;
    read?: boolean;
}
export interface HeaderUser {
    username?: string;
    email?: string;
    rol?: string;
    avatarUrl?: string;
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
