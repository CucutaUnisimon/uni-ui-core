import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
  hover?: boolean;
  className?: string;
  headerAction?: ReactNode;
  footer?: ReactNode;
  padding?: boolean;
}

/**
 * Componente Card Reutilizable
 * Tarjeta con variantes y efectos
 */
const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon: Icon,
  iconColor = 'text-primary',
  hover = true,
  className = '',
  headerAction,
  footer,
  padding = true,
  ...props
}) => {
  return (
    <motion.div
      className={`
        bg-white rounded-lg border border-gray-200 shadow-card
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Header de la card */}
      {(title || subtitle || Icon || headerAction) && (
        <div className={`border-b border-gray-200 ${padding ? 'p-6 pb-4' : 'p-0'}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {Icon && (
                <div className={`${iconColor} mt-1`}>
                  <Icon size={24} />
                </div>
              )}
              <div>
                {title && (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                )}
              </div>
            </div>
            {headerAction && <div>{headerAction}</div>}
          </div>
        </div>
      )}

      {/* Contenido de la card */}
      <div className={padding ? 'p-6' : 'p-0'}>{children}</div>

      {/* Footer de la card */}
      {footer && (
        <div className={`border-t border-gray-200 ${padding ? 'p-6 pt-4' : 'p-0'}`}>
          {footer}
        </div>
      )}
    </motion.div>
  );
};

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

/**
 * Variante de Card con estadísticas
 */
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType = 'positive',
  iconBgColor = 'bg-primary/10',
  iconColor = 'text-primary',
  className = '',
}) => {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <Card hover className={className}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`${iconBgColor} ${iconColor} p-3 rounded-lg`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </Card>
  );
};

interface ModuleCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: string;
  onClick?: () => void;
  favorite?: boolean;
  className?: string;
}

/**
 * Variante de Card para módulos
 */
export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  color = 'bg-primary',
  onClick,
  favorite = false,
  className = '',
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`
        bg-white rounded-lg border border-gray-200 shadow-card
        cursor-pointer card-hover p-6
        ${className}
      `}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${color} p-3 rounded-lg text-white`}>
          {Icon && <Icon size={24} />}
        </div>
        {favorite && (
          <span className="text-yellow-500">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export { Card };
export default Card;
