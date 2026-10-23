import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2, LucideIcon } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Componente Button Reutilizable
 * Botón con variantes y estados
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  // Variantes de estilo
  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-primary-contrast shadow-sm hover:shadow-soft',
    secondary:
      'bg-secondary-100 hover:bg-secondary-200 text-secondary-dark shadow-sm hover:shadow-soft',
    danger:
      'bg-error hover:bg-red-600 text-white shadow-sm hover:shadow-soft',
    success:
      'bg-success hover:bg-green-600 text-white shadow-sm hover:shadow-soft',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-contrast',
    ghost: 'text-secondary font-semibold hover:bg-secondary-50 hover:text-primary',
    link: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline',
  };

  // Tamaños
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={baseClasses}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="mr-2 h-4 w-4" />
      )}

      {children}

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="ml-2 h-4 w-4" />
      )}
    </motion.button>
  );
};

export default Button;
