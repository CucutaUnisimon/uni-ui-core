import React from 'react';
export interface FileImgUploadProps {
    label?: string;
    accept?: string;
    icon?: React.ReactNode;
    onFileSelect?: (base64: string | null, file: File | null) => void;
    onImageSelect?: (base64: string | null, file: File | null) => void;
    helperText?: string;
    maxSizeMB?: number;
    error?: boolean;
    value?: string | null;
    disabled?: boolean;
}
/**
 * Componente FileImgUpload Reutilizable
 * Mantiene exactamente el mismo diseño, estructura visual y comportamiento de FileUpload,
 * con soporte especializado para validación de imágenes y doble callback (onFileSelect / onImageSelect).
 */
export declare const FileImgUpload: React.FC<FileImgUploadProps>;
export default FileImgUpload;
