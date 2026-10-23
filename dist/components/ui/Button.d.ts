import React, { ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
export interface ButtonProps extends HTMLMotionProps<'button'> {
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
declare const Button: React.FC<ButtonProps>;
export { Button };
export default Button;
