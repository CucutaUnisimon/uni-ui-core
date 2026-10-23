import React from 'react';
export interface LoaderProps {
    fullScreen?: boolean;
    message?: string;
    logoSrc?: string;
}
/**
 * Componente Loader Global
 * Muestra una animación de carga mientras se ejecutan operaciones
 */
export declare const Loader: React.FC<LoaderProps>;
export interface SkeletonLoaderProps {
    count?: number;
    height?: string;
    className?: string;
}
export declare const SkeletonLoader: React.FC<SkeletonLoaderProps>;
export default Loader;
