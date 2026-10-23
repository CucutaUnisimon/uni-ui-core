import React, { ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';
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
declare const Card: React.FC<CardProps>;
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
export declare const StatCard: React.FC<StatCardProps>;
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
export declare const ModuleCard: React.FC<ModuleCardProps>;
export default Card;
