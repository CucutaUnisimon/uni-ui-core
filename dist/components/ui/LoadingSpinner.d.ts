import React from 'react';
interface LoadingSpinnerProps {
    message?: string;
    size?: number;
    color?: 'success' | 'primary' | 'secondary' | 'inherit';
    className?: string;
    minHeight?: string | number;
}
/**
 * LoadingSpinner — Componente reutilizable de carga con indicador circular institucional.
 */
export declare const LoadingSpinner: React.FC<LoadingSpinnerProps>;
export default LoadingSpinner;
