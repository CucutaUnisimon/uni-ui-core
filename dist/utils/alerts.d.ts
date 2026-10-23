import { SweetAlertResult } from 'sweetalert2';
/**
 * Servicio centralizado institucional para notificaciones y diálogos de la Universidad Simón Bolívar.
 * Proporciona una interfaz unificada y consistente con los tokens de diseño institucional.
 */
export declare const Alert: {
    /**
     * Muestra un mensaje de éxito tipo Toast (esquina superior derecha) que desaparece automáticamente.
     */
    success: (message: string, timer?: number) => Promise<SweetAlertResult>;
    /**
     * Muestra un mensaje de error en un diálogo central.
     */
    error: (title?: string, message?: string) => Promise<SweetAlertResult>;
    /**
     * Muestra un mensaje de información en un diálogo central.
     */
    info: (title: string, message?: string) => Promise<SweetAlertResult>;
    /**
     * Muestra un mensaje de advertencia en un diálogo central.
     */
    warning: (title: string, message?: string) => Promise<SweetAlertResult>;
    /**
     * Muestra un diálogo de confirmación para acciones destructivas o críticas.
     */
    confirm: (title: string, text?: string, confirmButtonText?: string, cancelButtonText?: string) => Promise<boolean>;
    /**
     * Diálogo de carga que bloquea la pantalla hasta que se resuelva la acción.
     */
    loading: (title?: string, text?: string) => void;
    /**
     * Cierra cualquier alerta o modal de carga activo.
     */
    close: () => void;
};
export default Alert;
