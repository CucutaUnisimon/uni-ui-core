import React, { ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
}
/**
 * Componente Modal Reutilizable
 */
declare const Modal: React.FC<ModalProps>;
interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: 'primary' | 'danger' | 'success' | 'outline';
    loading?: boolean;
}
/**
 * Modal de confirmación
 */
export declare const ConfirmModal: React.FC<ConfirmModalProps>;
export { Modal };
export default Modal;
