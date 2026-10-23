import React from 'react';
export interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    fileUuid?: string;
    imageUrl?: string;
    src?: string;
    title?: string;
    fileName?: string;
    fetchBlobUrl?: () => Promise<string>;
    getFileBlobUrl?: (fileUuid: string) => Promise<string>;
    onDownloadCustom?: () => Promise<void>;
    onDownloadFile?: (fileUuid: string, fileName?: string) => Promise<void>;
}
/**
 * Modal auto-contenido para previsualizar imágenes en tamaño completo
 */
export declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
