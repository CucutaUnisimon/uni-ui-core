import React from 'react';
export interface PdfModalProps {
    open: boolean;
    onClose: () => void;
    fileUuid?: string;
    fileUrl?: string;
    title?: string;
    fileName?: string;
    fetchBlobUrl?: () => Promise<string>;
    getFileBlobUrl?: (fileUuid: string) => Promise<string>;
    onDownloadCustom?: () => Promise<void>;
    onDownloadFile?: (fileUuid: string, fileName?: string) => Promise<void>;
}
/**
 * Modal auto-contenido para previsualizar y descargar archivos PDF.
 * Soporta modo desacoplado (ventana flotante arrastrable con fondo transparente)
 * para facilitar la comparación de documentos con los datos del formulario.
 */
export declare const PdfModal: React.FC<PdfModalProps>;
export default PdfModal;
