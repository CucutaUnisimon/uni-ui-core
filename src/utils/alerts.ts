import Swal, { SweetAlertResult } from 'sweetalert2';

/**
 * Servicio centralizado institucional para notificaciones y diálogos de la Universidad Simón Bolívar.
 * Proporciona una interfaz unificada y consistente con los tokens de diseño institucional.
 */
export const Alert = {
    /**
     * Muestra un mensaje de éxito tipo Toast (esquina superior derecha) que desaparece automáticamente.
     */
    success: (message: string, timer: number = 3000): Promise<SweetAlertResult> => {
        return Swal.fire({
            icon: 'success',
            title: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer,
            timerProgressBar: true,
            customClass: {
                popup: 'swal2-toast-institutional'
            }
        });
    },

    /**
     * Muestra un mensaje de error en un diálogo central.
     */
    error: (title: string = 'Error', message?: string): Promise<SweetAlertResult> => {
        return Swal.fire({
            icon: 'error',
            title: title || 'Error',
            text: message || 'Ha ocurrido un error inesperado',
            confirmButtonColor: 'var(--error-main, #ef4444)',
            confirmButtonText: 'Entendido',
            background: '#ffffff',
            color: '#1e293b',
        });
    },

    /**
     * Muestra un mensaje de información en un diálogo central.
     */
    info: (title: string, message?: string): Promise<SweetAlertResult> => {
        return Swal.fire({
            icon: 'info',
            title,
            text: message,
            confirmButtonColor: 'var(--info-main, #3b82f6)',
            confirmButtonText: 'Aceptar',
            background: '#ffffff',
            color: '#1e293b',
        });
    },

    /**
     * Muestra un mensaje de advertencia en un diálogo central.
     */
    warning: (title: string, message?: string): Promise<SweetAlertResult> => {
        return Swal.fire({
            icon: 'warning',
            title,
            text: message,
            confirmButtonColor: 'var(--warning-main, #f59e0b)',
            confirmButtonText: 'Aceptar',
            background: '#ffffff',
            color: '#1e293b',
        });
    },

    /**
     * Muestra un diálogo de confirmación para acciones destructivas o críticas.
     */
    confirm: async (
        title: string,
        text: string = 'Esta acción no se puede deshacer',
        confirmButtonText: string = 'Sí, confirmar',
        cancelButtonText: string = 'Cancelar'
    ): Promise<boolean> => {
        const result = await Swal.fire({
            title,
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--primary-main, #09843B)',
            cancelButtonColor: 'var(--error-main, #ef4444)',
            confirmButtonText,
            cancelButtonText,
            reverseButtons: true,
            background: '#ffffff',
            color: '#1e293b',
        });

        return result.isConfirmed;
    },

    /**
     * Diálogo de carga que bloquea la pantalla hasta que se resuelva la acción.
     */
    loading: (title: string = 'Cargando...', text?: string) => {
        Swal.fire({
            title,
            text,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    },

    /**
     * Cierra cualquier alerta o modal de carga activo.
     */
    close: () => {
        Swal.close();
    }
};

export default Alert;
