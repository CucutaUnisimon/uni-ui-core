import React, { useRef, useState } from 'react';
import { Upload, X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Box, Typography, LinearProgress, IconButton } from '@mui/material';

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
export const FileImgUpload: React.FC<FileImgUploadProps> = ({
    label = 'Subir archivo',
    accept = 'image/png,image/jpeg,image/jpg,image/webp',
    icon,
    onFileSelect,
    onImageSelect,
    helperText = 'Formatos soportados: JPG, PNG, WEBP (máx. 5MB)',
    maxSizeMB = 5,
    error = false,
    disabled = false,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [conversionError, setConversionError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const notifySelect = (base64: string | null, selected: File | null) => {
        if (onFileSelect) onFileSelect(base64, selected);
        if (onImageSelect) onImageSelect(base64, selected);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            processFile(selectedFile);
        }
    };

    const processFile = (selectedFile: File) => {
        setConversionError(null);

        // Validar tipo de imagen de forma segura soportando comas, comodines y extensiones
        if (accept && accept !== '*/*') {
            const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());
            const fileType = selectedFile.type.toLowerCase();
            const fileName = selectedFile.name.toLowerCase();

            const isValid = acceptedTypes.some(type => {
                if (type.startsWith('.')) return fileName.endsWith(type);
                if (type.endsWith('/*')) {
                    const prefix = type.split('/')[0];
                    return fileType.startsWith(`${prefix}/`);
                }
                return type === fileType;
            });

            if (!isValid) {
                setConversionError(`El tipo de archivo no es válido. Formatos permitidos: ${accept}`);
                return;
            }
        } else if (!selectedFile.type.startsWith('image/')) {
            setConversionError('El tipo de archivo no es válido. Se requiere una imagen (JPG, PNG, WEBP)');
            return;
        }

        // Validar tamaño
        if (selectedFile.size > maxSizeMB * 1024 * 1024) {
            setConversionError(`El archivo supera el límite de ${maxSizeMB}MB`);
            return;
        }

        setFile(selectedFile);
        setLoading(true);

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;
            // Remover el prefijo data:*/*;base64,
            const base64Content = base64String.split(',')[1];
            notifySelect(base64Content, selectedFile);
            setLoading(false);
        };
        reader.onerror = () => {
            setConversionError('Error al leer el archivo');
            setLoading(false);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFile(null);
        setConversionError(null);
        notifySelect(null, null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (disabled) return;
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        if (disabled) return;
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        if (disabled) return;
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) {
            processFile(droppedFile);
        }
    };

    return (
        <Box className="w-full space-y-2">
            {label && (
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {icon || <FileText size={18} />}
                    </div>
                    <div>
                        <p className={`text-sm font-bold text-gray-700 ${error ? 'text-red-500' : 'text-gray-500'}`}>{label}</p>
                    </div>
                </div>
            )}

            <div
                onClick={() => !disabled && fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    relative group border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${disabled ? 'border-gray-200 bg-gray-100/50 cursor-not-allowed opacity-60' : 'cursor-pointer hover:border-primary/50 hover:bg-white'}
                    ${isDragging && !disabled ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-gray-200 bg-gray-50/50'}
                    ${(error || conversionError) && !disabled ? 'border-red-300 bg-red-50' : ''}
                `}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept={accept}
                    className="hidden"
                />

                {loading ? (
                    <Box className="w-full flex flex-col items-center gap-2">
                        <LinearProgress className="w-32 rounded-full" />
                        <Typography variant="caption" className="text-gray-400">Procesando archivo...</Typography>
                    </Box>
                ) : file ? (
                    <div className="flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            {icon || <FileText size={20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <Typography variant="body2" className="font-bold text-gray-700 truncate">
                                {file.name}
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </Typography>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                            <IconButton 
                                size="small" 
                                onClick={handleClear} 
                                disabled={disabled}
                                className="text-gray-400 hover:text-red-500"
                            >
                                <X size={18} />
                            </IconButton>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="bg-white p-3 rounded-2xl shadow-md text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                            <Upload size={28} />
                        </div>
                        <div className="text-center">
                            <Typography variant="body2" className="font-bold text-gray-600">
                                Haz clic o arrastra un archivo
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                                {helperText}
                            </Typography>
                        </div>
                    </>
                )}
            </div>

            {(error || conversionError) && (
                <Typography variant="caption" className="text-red-500 flex items-center gap-1 font-medium mt-1">
                    <AlertCircle size={14} /> {conversionError || 'Campo requerido'}
                </Typography>
            )}
        </Box>
    );
};

export default FileImgUpload;
