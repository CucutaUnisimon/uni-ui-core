import React from 'react';
export interface FileUploadProps {
    label?: string;
    accept?: string;
    onFileSelect: (base64: string | null, file: File | null) => void;
    onFileRemove?: () => void;
    onView?: () => void;
    previewUrl?: string | null;
    helperText?: string;
    recommendedText?: string;
    maxSizeMB?: number;
    maxSize?: number;
    error?: boolean;
    value?: string | null;
}
/**
 * Componente FileUpload Reutilizable
 */
export declare const FileUpload: React.FC<FileUploadProps>;
export default FileUpload;
