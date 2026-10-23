import React from 'react';
interface LoadingOverlayProps {
    open: boolean;
    message?: string;
}
/**
 * LoadingOverlay — Componente reutilizable de bloqueo visual (Backdrop)
 * Ideal para descargas de PDF, guardados pesados o procesos en segundo plano.
 */
export declare const LoadingOverlay: React.FC<LoadingOverlayProps>;
export default LoadingOverlay;
