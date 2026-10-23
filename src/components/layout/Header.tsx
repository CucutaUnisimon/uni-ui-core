import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Settings,
  LogOut,
  User,
  ChevronDown,
  MapPin,
} from 'lucide-react';

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

const defaultNotifications: HeaderNotification[] = [
  {
    id: 1,
    title: 'Nuevas calificaciones',
    message: 'Se han publicado las notas del parcial',
    time: 'Hace 2 horas',
    read: false,
  },
  {
    id: 2,
    title: 'Recordatorio',
    message: 'Matrícula para el próximo semestre',
    time: 'Hace 5 horas',
    read: false,
  },
  {
    id: 3,
    title: 'Evento académico',
    message: 'Conferencia de tecnología mañana',
    time: 'Ayer',
    read: true,
  },
];

/**
 * Componente Header Institucional
 * Barra superior con información del usuario, notificaciones y menú desplegable completo
 */
export const Header: React.FC<HeaderProps> = ({
  portalTitle = 'Gestión de la Investigación',
  portalSubtitle = 'Universidad Simón Bolívar',
  user,
  onLogout,
  onProfileClick,
  onSettingsClick,
  notifications = defaultNotifications,
  unreadCount: propUnreadCount,
  onNotificationClick,
  onMarkAllAsRead,
  onViewAllNotifications,
  rightActions,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const unreadCount =
    propUnreadCount !== undefined
      ? propUnreadCount
      : notifications.filter((n) => !n.read).length;

  const fullName =
    user?.nombre && user?.apellido
      ? `${user.nombre} ${user.apellido}`
      : user?.nombre || user?.name || user?.username || 'Unisimon Bolivar';

  const avatarSrc =
    user?.foto ||
    user?.avatarUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fullName
    )}&background=076930&color=fff&size=128`;

  // Cerrar dropdowns al hacer click fuera
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
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                title="Notificaciones"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-3xl"></span>
                )}
              </button>

              {/* Dropdown de notificaciones */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          Notificaciones
                        </h3>
                        {unreadCount > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            {unreadCount} sin leer
                          </p>
                        )}
                      </div>
                      {onMarkAllAsRead && unreadCount > 0 && (
                        <button
                          type="button"
                          onClick={onMarkAllAsRead}
                          className="text-xs text-primary font-medium hover:underline cursor-pointer"
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
                            onClick={() =>
                              onNotificationClick && onNotificationClick(notification)
                            }
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                              !notification.read ? 'bg-blue-50/60' : ''
                            }`}
                          >
                            <p className="font-medium text-sm text-gray-900">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            {notification.time && (
                              <p className="text-xs text-gray-400 mt-2">
                                {notification.time}
                              </p>
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    <div className="p-3 text-center border-t border-gray-200">
                      <button
                        type="button"
                        onClick={onViewAllNotifications}
                        className="text-sm text-primary hover:text-primary-dark font-medium cursor-pointer"
                      >
                        Ver todas las notificaciones
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Perfil del usuario */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src={avatarSrc}
                  alt={fullName}
                  className="w-10 h-10 rounded-3xl border-2 border-primary object-cover"
                />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    {fullName}
                  </p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <span>{user?.sede || user?.rol || user?.role || ''}</span>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-600 transition-transform ${
                    showDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown del usuario */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    {/* Info del usuario */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <img
                          src={avatarSrc}
                          alt={fullName}
                          className="w-12 h-12 rounded-3xl border-2 border-primary object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-semibold text-gray-900 truncate"
                            title={fullName}
                          >
                            {fullName}
                          </p>
                          {user?.email && (
                            <p
                              className="text-sm text-gray-500 truncate"
                              title={user.email}
                            >
                              {user.email}
                            </p>
                          )}
                          {(user?.sede || user?.rol || user?.role) && (
                            <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                              <MapPin size={12} />
                              <span>Sede {user?.sede || user?.rol || user?.role}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {(user?.programa || user?.codigo) && (
                        <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                          {user?.programa && (
                            <p
                              className="text-xs text-primary font-medium truncate"
                              title={user.programa}
                            >
                              {user.programa}
                            </p>
                          )}
                          <p className="text-xs text-gray-600 mt-1">
                            Código: {user?.codigo || 'N/A'}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Opciones del menú */}
                    <div className="p-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowDropdown(false);
                          if (onProfileClick) onProfileClick();
                        }}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                      >
                        <User size={18} />
                        <span className="text-sm">Mi Perfil</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowDropdown(false);
                          if (onSettingsClick) onSettingsClick();
                        }}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                      >
                        <Settings size={18} />
                        <span className="text-sm">Configuración</span>
                      </button>
                    </div>

                    {/* Cerrar sesión */}
                    {onLogout && (
                      <div className="p-2 border-t border-gray-200">
                        <button
                          type="button"
                          onClick={() => {
                            setShowDropdown(false);
                            onLogout();
                          }}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <LogOut size={18} />
                          <span className="text-sm font-medium">
                            Cerrar Sesión
                          </span>
                        </button>
                      </div>
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
