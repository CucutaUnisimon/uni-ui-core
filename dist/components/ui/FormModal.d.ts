import React, { ReactNode } from 'react';
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
/**
 * FormModal — Modal reutilizable para formularios
 * Animación de entrada: deslizamiento de abajo hacia arriba
 * Tamaño dinámico via prop `size`
 */
export declare const FormModal: React.FC<FormModalProps>;
export default FormModal;
