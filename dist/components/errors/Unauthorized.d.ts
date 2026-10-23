import React from 'react';
export interface UnauthorizedProps {
    title?: string;
    description?: string;
    homeText?: string;
    backText?: string;
    onNavigateHome?: () => void;
    onNavigateBack?: () => void;
    logoSrc?: string;
    showLogo?: boolean;
}
/**
 * Componente Unauthorized (403) Institucional
 * Página de error de acceso denegado personalizada con estética y tokens de la Universidad Simón Bolívar
 */
export declare const Unauthorized: React.FC<UnauthorizedProps>;
export default Unauthorized;
