import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import defaultLogoUnisimon from '../../assets/logoUnisimon.png';
import * as Icons from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import { MenuItem } from '../../types';

export interface SidebarProps {
  menuItems: MenuItem[];
  currentPath?: string;
  onNavigate?: (path: string) => void;
  logoSrc?: string;
  user?: { username?: string; email?: string };
  onLogout?: () => void;
  LinkComponent?: React.ComponentType<{
    to: string;
    className?: string;
    title?: string;
    children: React.ReactNode;
  }>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  menuItems = [],
  currentPath = '',
  onNavigate,
  logoSrc = defaultLogoUnisimon,
  user,
  onLogout,
  LinkComponent,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [menuSearch, setMenuSearch] = useState('');

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  useEffect(() => {
    if (!isDesktop) {
      setIsMobileOpen(false);
    }
  }, [currentPath, isDesktop]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.label.toLowerCase().includes(menuSearch.toLowerCase()) ||
      (item.children &&
        item.children.some((child) =>
          child.label.toLowerCase().includes(menuSearch.toLowerCase())
        ))
  );

  const DefaultLink: React.FC<{
    to: string;
    className?: string;
    title?: string;
    children: React.ReactNode;
  }> = ({ to, className, title, children }) => (
    <a
      href={to}
      onClick={(e) => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(to);
        }
      }}
      className={className}
      title={title}
    >
      {children}
    </a>
  );

  const LinkElem = LinkComponent || DefaultLink;

  return (
    <>
      {/* Overlay móvil */}
      <AnimatePresence>
        {!isDesktop && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Botón flotante móvil */}
      {!isDesktop && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-4 left-4 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-primary cursor-pointer"
        >
          <Icons.Menu size={24} />
        </button>
      )}

      {/* Sidebar contenedor */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? '80px' : '280px',
          x: isDesktop ? 0 : isMobileOpen ? 0 : '-100%',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="fixed lg:relative h-screen bg-white border-r border-gray-200 shadow-lg z-50 flex flex-col transition-all duration-300"
      >
        {/* Header Logo */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100 bg-white">
          {!isCollapsed ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <img
                  src={logoSrc}
                  alt="Logo Simón Bolívar"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors lg:block hidden cursor-pointer"
              >
                <Icons.ChevronLeft size={20} />
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
          )}
        </div>

        {/* Botón expandir cuando está colapsado */}
        {isCollapsed && isDesktop && (
          <div className="py-2 flex justify-center border-b border-gray-100">
            <button
              onClick={() => setIsCollapsed(false)}
              className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
              title="Expandir menú"
            >
              <Icons.ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Buscador */}
        {!isCollapsed && (
          <div className="p-4">
            <div className="relative group">
              <Icons.Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
              />
              <input
                type="text"
                placeholder="Buscar en el menú..."
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-gray-700"
              />
              {menuSearch && (
                <button
                  onClick={() => setMenuSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
                >
                  <Icons.X size={14} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Navegación de items */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar py-4 px-3 space-y-1">
          {filteredMenuItems.map((item) => {
            const hasChildren = !!item.children && item.children.length > 0;
            const isExpanded = expandedMenus.includes(item.label);
            const isActive =
              currentPath === item.path ||
              (hasChildren &&
                item.children?.some((child) => currentPath === child.path));
            const Icon = item.icon || Icons.Circle;

            return (
              <div key={item.label} className="lg:mb-1">
                {hasChildren ? (
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`
                      w-full flex items-center group transition-all duration-200 rounded-lg p-3 cursor-pointer
                      ${isCollapsed ? 'justify-center' : 'px-4 py-3'}
                      ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                      }
                    `}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon
                      size={isCollapsed ? 24 : 20}
                      className={`${!isCollapsed && 'mr-3'} ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-primary'
                      } transition-colors`}
                    />
                    {!isCollapsed && (
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                    {!isCollapsed && (
                      <div className="ml-auto flex items-center">
                        {isExpanded ? (
                          <Icons.ChevronUp size={16} />
                        ) : (
                          <Icons.ChevronDown size={16} />
                        )}
                      </div>
                    )}
                  </button>
                ) : (
                  <LinkElem
                    to={item.path}
                    className={`
                      flex items-center group transition-all duration-200 rounded-lg cursor-pointer
                      ${isCollapsed ? 'justify-center p-3' : 'px-4 py-3'}
                      ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                      }
                    `}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon
                      size={isCollapsed ? 24 : 20}
                      className={`${!isCollapsed && 'mr-3'} ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-primary'
                      } transition-colors`}
                    />
                    {!isCollapsed && (
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </LinkElem>
                )}

                {/* Sub-items */}
                <AnimatePresence>
                  {hasChildren && isExpanded && !isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 pl-4 border-l-2 border-gray-100 my-1 space-y-1"
                    >
                      {item.children?.map((child) => {
                        const isChildActive = currentPath === child.path;
                        return (
                          <LinkElem
                            key={child.path}
                            to={child.path}
                            className={`
                              flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer
                              ${
                                isChildActive
                                  ? 'text-primary bg-primary/10 font-bold'
                                  : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                              }
                            `}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mr-2.5 ${
                                isChildActive ? 'bg-primary' : 'bg-gray-300'
                              }`}
                            />
                            {child.label}
                          </LinkElem>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Footer del Sidebar */}
        {user && !isCollapsed && (
          <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                {user.username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <p className="text-xs font-bold text-gray-700 truncate">
                {user.username}
              </p>
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                title="Cerrar sesión"
              >
                <Icons.LogOut size={16} />
              </button>
            )}
          </div>
        )}
      </motion.aside>
    </>
  );
};

export default Sidebar;
