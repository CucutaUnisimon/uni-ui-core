import React from 'react';
export interface NotFoundProps {
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
 * Componente NotFound (404) Institucional
 * Pantalla de error 404 personalizada con estética y tokens de la Universidad Simón Bolívar
 */
export declare const NotFound: React.FC<NotFoundProps>;
export default NotFound;
