import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  LogOut,
  User,
  ChevronDown,
} from 'lucide-react';

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

export const Header: React.FC<HeaderProps> = ({
  portalTitle = 'Portal Institucional',
  portalSubtitle = 'Universidad Simón Bolívar',
  user,
  onLogout,
  notifications = [],
  unreadCount = 0,
  onNotificationClick,
  onMarkAllAsRead,
  rightActions,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShowDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Título del Portal */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight leading-tight">
              {portalTitle}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              {portalSubtitle}
            </p>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-4 ml-4">
            {rightActions}

            {/* Notificaciones */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                title="Notificaciones"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Dropdown de notificaciones */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">
                          Notificaciones
                        </h3>
                        {unreadCount > 0 && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {unreadCount} sin leer
                          </p>
                        )}
                      </div>
                      {onMarkAllAsRead && unreadCount > 0 && (
                        <button
                          onClick={onMarkAllAsRead}
                          className="text-xs text-primary font-semibold hover:underline cursor-pointer"
                        >
                          Marcar leídas
                        </button>
                      )}
                    </div>
                    <div className="max-h-96 overflow-y-auto custom-scrollbar">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-xs text-gray-400">
                          No tienes notificaciones
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            onClick={() => onNotificationClick && onNotificationClick(notification)}
                            className={`p-3.5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                              !notification.read ? 'bg-emerald-50/40' : ''
                            }`}
                          >
                            <p className="font-bold text-xs text-gray-900">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                              {notification.message}
                            </p>
                            {notification.time && (
                              <p className="text-[10px] text-gray-400 mt-1">
                                {notification.time}
                              </p>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Perfil del usuario */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-3 p-1.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.username || 'Usuario'} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    user?.username ? user.username.charAt(0).toUpperCase() : <User size={18} />
                  )}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    {user?.username || 'Usuario'}
                  </p>
                  <p className="text-[11px] text-gray-400 font-medium">
                    {user?.rol || user?.email || 'Institucional'}
                  </p>
                </div>
                <ChevronDown size={14} className="text-gray-400 hidden md:block" />
              </button>

              {/* Dropdown del perfil */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50">
                      <p className="text-xs font-bold text-gray-900 truncate">
                        {user?.username || 'Usuario'}
                      </p>
                      {user?.email && (
                        <p className="text-[10px] text-gray-400 truncate mt-0.5">
                          {user.email}
                        </p>
                      )}
                    </div>

                    {onLogout && (
                      <button
                        onClick={onLogout}
                        className="w-full flex items-center px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition-colors font-semibold cursor-pointer"
                      >
                        <LogOut size={14} className="mr-2" />
                        Cerrar Sesión
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
