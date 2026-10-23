import React from 'react';
import { motion } from 'framer-motion';
import defaultLoaderLogo from '../../assets/loaderLogo.png';

export interface LoaderProps {
  fullScreen?: boolean;
  message?: string;
  logoSrc?: string;
}

/**
 * Componente Loader Global
 * Muestra una animación de carga mientras se ejecutan operaciones
 */
export const Loader: React.FC<LoaderProps> = ({ 
  fullScreen = false, 
  message = 'Cargando...',
  logoSrc = defaultLoaderLogo
}) => {
  const containerClass = fullScreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center'
    : 'flex items-center justify-center py-12';

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* Logo con anillo giratorio alrededor */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Anillo de fondo */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
          {/* Anillo giratorio */}
          <motion.div
            className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          {/* Logo centrado estático */}
          <div className="absolute inset-2 rounded-full overflow-hidden flex items-center justify-center bg-white">
            <img src={logoSrc} alt="Cargando" className="w-full h-full object-contain p-1" />
          </div>
        </div>

        {/* Mensaje con puntos animados */}
        <motion.p
          className="text-gray-600 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {message}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ...
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export interface SkeletonLoaderProps {
  count?: number;
  height?: string;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 3,
  height = 'h-12',
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${height} bg-gray-200 rounded-lg animate-pulse`}
        />
      ))}
    </div>
  );
};

export default Loader;
