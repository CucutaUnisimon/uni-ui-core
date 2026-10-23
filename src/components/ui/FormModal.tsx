import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xl7' | 'full';

export interface FormModalProps {
    open: boolean;
    onClose: () => void;
    /** Nodo icono que aparece en el header (ej. <Edit2 size={24} />) */
    icon: ReactNode;
    title: string;
    subtitle?: string | ReactNode;
    /** Sección de botones de acción que va en el footer */
    footer: ReactNode;
    children: ReactNode;
    /** sm=448px md=640px lg=768px xl=960px xxl=896px xxxl=1024px xxxxl=1152px xl7=1280px full=100% */
    size?: ModalSize;
}

const sizeClasses: Record<ModalSize, string> = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    xxl: 'max-w-4xl',
    xxxl: 'max-w-5xl',
    xxxxl: 'max-w-6xl',
    xl7: 'max-w-7xl',
    full: 'max-w-full mx-4',
};

/**
 * FormModal — Modal reutilizable para formularios
 * Animación de entrada: deslizamiento de abajo hacia arriba
 * Tamaño dinámico via prop `size`
 */
export const FormModal: React.FC<FormModalProps> = ({
    open,
    onClose,
    icon,
    title,
    subtitle,
    footer,
    children,
    size = 'md',
}) => {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Contenedor centrado */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`
                                relative bg-white rounded-2xl shadow-premium w-full border border-secondary/20
                                max-h-[90vh] flex flex-col overflow-hidden
                                ${sizeClasses[size]}
                            `}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 px-6 py-5 border-b border-border bg-secondary-50/50">
                                {/* Icono con fondo verde institucional */}
                                <div className="p-2.5 bg-primary text-primary-contrast rounded-xl shadow-md shadow-primary/20 flex-shrink-0">
                                    {icon}
                                </div>
                                {/* Título y subtítulo */}
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-lg font-black text-gray-900 leading-tight">{title}</h2>
                                    {subtitle && (
                                        typeof subtitle === 'string' ? (
                                            <p className="text-xs text-gray-500 font-medium mt-0.5">{subtitle}</p>
                                        ) : (
                                            <div className="text-xs text-gray-500 font-medium mt-0.5">{subtitle}</div>
                                        )
                                    )}
                                </div>
                                {/* Botón cerrar */}
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
                                    aria-label="Cerrar"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Contenido scrolleable */}
                            <div className="flex-1 overflow-y-auto px-6 py-6">
                                {children}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-secondary-50 border-t border-border flex items-center justify-end gap-3">
                                {footer}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FormModal;
