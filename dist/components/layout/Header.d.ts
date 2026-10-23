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
    apellido?: string;
    username?: string;
    email?: string;
    role?: string;
    rol?: string;
    sede?: string;
    programa?: string;
    codigo?: string | number;
    foto?: string;
    avatarUrl?: string;
    [key: string]: any;
}
export interface HeaderProps {
    portalTitle?: string;
    portalSubtitle?: string;
    user?: HeaderUser | null;
    onLogout?: () => void;
    onProfileClick?: () => void;
    onSettingsClick?: () => void;
    notifications?: HeaderNotification[];
    unreadCount?: number;
    onNotificationClick?: (notif: HeaderNotification) => void;
    onMarkAllAsRead?: () => void;
    onViewAllNotifications?: () => void;
    rightActions?: React.ReactNode;
}
/**
 * Componente Header Institucional
 * Barra superior con información del usuario, notificaciones y menú desplegable completo
 */
export declare const Header: React.FC<HeaderProps>;
export default Header;
