import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography } from '@mui/material';
import { X, Image as ImageIcon, Download } from 'lucide-react';
import Button from './Button';

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
export const ImageModal: React.FC<ImageModalProps> = ({ 
    open, 
    onClose, 
    fileUuid, 
    imageUrl,
    src,
    title = 'Vista Previa de la Imagen',
    fileName = 'imagen.jpg',
    fetchBlobUrl,
    getFileBlobUrl,
    onDownloadCustom,
    onDownloadFile
}) => {
    const [blobUrl, setBlobUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!open) return;
        const directUrl = src || imageUrl;
        if (!fileUuid && !fetchBlobUrl && !directUrl) return;

        let isMounted = true;
        let localBlobUrl = '';

        const loadFile = async () => {
            try {
                setIsLoading(true);
                let url = '';
                if (directUrl) {
                    url = directUrl;
                } else if (fetchBlobUrl) {
                    url = await fetchBlobUrl();
                } else if (fileUuid && getFileBlobUrl) {
                    url = await getFileBlobUrl(fileUuid);
                } else {
                    throw new Error('No se proporcionó una función de descarga o URL para la imagen.');
                }
                
                if (isMounted) {
                    localBlobUrl = url;
                    setBlobUrl(url);
                    setError(null);
                }
            } catch (err) {
                console.error('Error loading Image:', err);
                if (isMounted) {
                    setError('No se pudo cargar la imagen. Verifique su conexión o permisos.');
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadFile();

        return () => {
            isMounted = false;
            if (localBlobUrl && localBlobUrl.startsWith('blob:')) {
                window.URL.revokeObjectURL(localBlobUrl);
            }
        };
    }, [open, fileUuid, imageUrl, src, fetchBlobUrl, getFileBlobUrl]);

    const handleDownload = async () => {
        if (onDownloadCustom) {
            await onDownloadCustom();
        } else if (fileUuid && onDownloadFile) {
            await onDownloadFile(fileUuid, fileName);
        } else if (blobUrl) {
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            maxWidth="md" 
            fullWidth 
            disableEnforceFocus 
            className='rounded-2xl overflow-hidden'
        >
            <DialogTitle sx={{ 
                m: 0, 
                p: 2, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'divider',
                bgcolor: 'white'
            }}>
                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ 
                        p: 1, 
                        bgcolor: 'primary.lighter', 
                        color: 'primary.main', 
                        borderRadius: '12px',
                        display: 'flex'
                    }}>
                        <ImageIcon size={20} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={800} lineHeight={1.2}>
                            Visualización de Imagen
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {title}
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button 
                        variant="primary" 
                        size="sm" 
                        onClick={handleDownload}
                        className="text-xs h-8 px-3 shadow-sm font-bold"
                        icon={Download}
                    >
                        Descargar
                    </Button>
                    <IconButton 
                        onClick={onClose} 
                        size="small" 
                        sx={{ 
                            color: 'text.secondary', 
                            '&:hover': { bgcolor: 'error.lighter', color: 'error.main' }
                        }}
                    >
                        <X size={20} />
                    </IconButton>
                </Box>
            </DialogTitle>
            
            <DialogContent sx={{ p: 0, bgcolor: '#0f172a', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isLoading ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 4 }}>
                        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            Cargando imagen...
                        </Typography>
                    </Box>
                ) : error ? (
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="body1" color="error" gutterBottom>
                            {error}
                        </Typography>
                        <Button variant="secondary" size="sm" onClick={onClose} className="mt-2">
                            Cerrar
                        </Button>
                    </Box>
                ) : (
                    <img 
                        src={blobUrl} 
                        alt={title} 
                        className="max-w-full max-h-[75vh] object-contain mx-auto select-none"
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ImageModal;
