import React, { useRef, useState } from 'react';
import { Upload, X, FileText, CheckCircle2, AlertCircle, Eye } from 'lucide-react';
import { Box, Typography, LinearProgress, IconButton, Tooltip } from '@mui/material';

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
    disabled?: boolean;
}

/**
 * Componente FileUpload Reutilizable
 */
export const FileUpload: React.FC<FileUploadProps> = ({
    label = 'Subir archivo',
    accept = 'application/pdf',
    onFileSelect,
    onFileRemove,
    onView,
    previewUrl,
    helperText,
    recommendedText = 'Solo archivos PDF (máx. 5MB)',
    maxSizeMB,
    maxSize = 5,
    error = false,
    value,
    disabled = false,
}) => {
    const effectiveMaxSize = maxSizeMB || maxSize;
    const effectiveHelperText = helperText || recommendedText;
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [conversionError, setConversionError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const hasFile = !!file || !!previewUrl;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            processFile(selectedFile);
        }
    };

    const processFile = (selectedFile: File) => {
        setConversionError(null);
        
        if (accept) {
            const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());
            const fileType = selectedFile.type.toLowerCase();
            const fileName = selectedFile.name.toLowerCase();
            
            const isTypeValid = acceptedTypes.some(type => {
                if (type.startsWith('.')) {
                    return fileName.endsWith(type);
                }
                if (type.includes('*')) {
                    const regex = new RegExp('^' + type.replace(/\*/g, '.*') + '$');
                    return regex.test(fileType);
                }
                return fileType === type;
            });

            if (!isTypeValid) {
                setConversionError(`El tipo de archivo no es válido (${selectedFile.name}).`);
                return;
            }
        }

        if (selectedFile.size > effectiveMaxSize * 1024 * 1024) {
            setConversionError(`El archivo supera el límite de ${effectiveMaxSize}MB`);
            return;
        }

        setFile(selectedFile);
        setLoading(true);

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;
            onFileSelect(base64String, selectedFile);
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
        onFileSelect(null, null);
        if (onFileRemove) {
            onFileRemove();
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
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
                <Typography variant="caption" className="font-semibold text-gray-700">
                    {label}
                </Typography>
            )}

            <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    relative group cursor-pointer border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-gray-200 bg-gray-50/50 hover:border-primary/50 hover:bg-white'}
                    ${error || conversionError ? 'border-red-300 bg-red-50' : ''}
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
                ) : hasFile ? (
                    <div className="flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <FileText size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <Typography variant="body2" className="font-bold text-gray-700 truncate">
                                {file ? file.name : 'Archivo cargado'}
                            </Typography>
                            {file && (
                                <Typography variant="caption" className="text-gray-400">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </Typography>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                            {onView && (
                                <Tooltip title="Ver archivo" arrow placement="top">
                                    <IconButton 
                                        size="small" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onView();
                                        }} 
                                        className="text-gray-400 hover:text-primary"
                                    >
                                        <Eye size={16} />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <IconButton size="small" onClick={handleClear} className="text-gray-400 hover:text-red-500">
                                <X size={16} />
                            </IconButton>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-1 text-center">
                        <div className="p-3 bg-gray-100 group-hover:bg-primary/10 rounded-full text-gray-400 group-hover:text-primary transition-colors">
                            <Upload size={24} />
                        </div>
                        <Typography variant="body2" className="font-medium text-gray-600">
                            Haz clic o arrastra un archivo
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                            {effectiveHelperText}
                        </Typography>
                    </div>
                )}
            </div>

            {conversionError && (
                <Box className="flex items-center gap-1.5 mt-1 text-red-500 text-xs animate-in fade-in">
                    <AlertCircle size={14} />
                    <span>{conversionError}</span>
                </Box>
            )}
        </Box>
    );
};

export default FileUpload;
