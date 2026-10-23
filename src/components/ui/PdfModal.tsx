import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography, Tooltip, Chip } from '@mui/material';
import { X, FileText, Download, ExternalLink, Minimize2, Move, GripHorizontal } from 'lucide-react';
import Button from './Button';

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
export const PdfModal: React.FC<PdfModalProps> = ({ 
    open, 
    onClose, 
    fileUuid, 
    fileUrl,
    title = 'Vista Previa del Documento',
    fileName = 'documento.pdf',
    fetchBlobUrl,
    getFileBlobUrl,
    onDownloadCustom,
    onDownloadFile
}) => {
    const [blobUrl, setBlobUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Estado para modo desacoplado (flotante / arrastrable)
    const [isDetached, setIsDetached] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const dragStartRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
        startX: 0,
        startY: 0,
        posX: 0,
        posY: 0
    });

    useEffect(() => {
        if (!open) return;
        if (!fileUuid && !fileUrl && !fetchBlobUrl) return;

        let active = true;

        const loadFile = async () => {
            try {
                setIsLoading(true);
                let url = '';
                if (fileUrl) {
                    url = fileUrl;
                } else if (fetchBlobUrl) {
                    url = await fetchBlobUrl();
                } else if (fileUuid && getFileBlobUrl) {
                    url = await getFileBlobUrl(fileUuid);
                } else {
                    throw new Error('No se proporcionó una función de descarga o URL para el archivo.');
                }
                
                if (active) {
                    setBlobUrl(url);
                    setError(null);
                }
            } catch (err: any) {
                console.error('Error loading PDF:', err);
                if (active) {
                    setError('No se pudo cargar el documento. Verifique su conexión o permisos.');
                }
            } finally {
                if (active) {
                    setIsLoading(false);
                }
            }
        };

        loadFile();

        return () => {
            active = false;
            if (blobUrl && blobUrl.startsWith('blob:')) {
                window.URL.revokeObjectURL(blobUrl);
            }
        };
    }, [open, fileUuid, fileUrl, fetchBlobUrl, getFileBlobUrl]);

    // Resetear o inicializar posición al abrir o cambiar de modo
    useEffect(() => {
        if (open && isDetached) {
            // Posicionar por defecto al lado derecho de la pantalla
            const defaultWidth = 640;
            const initialX = Math.max(20, window.innerWidth - defaultWidth - 30);
            const initialY = 60;
            setPosition({ x: initialX, y: initialY });
        }
    }, [open, isDetached]);

    // Al cerrar el modal, restablecer estado
    const handleClose = () => {
        setIsDetached(false);
        onClose();
    };

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

    const handleOpenInNewTab = () => {
        if (blobUrl) {
            window.open(blobUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const toggleDetached = () => {
        setIsDetached(prev => !prev);
    };

    // Manejadores de arrastre (Pointer events)
    const handlePointerDown = (e: React.PointerEvent) => {
        if (!isDetached) return;
        // Evitar arrastrar si se hizo clic en un botón o elemento interactivo
        if ((e.target as HTMLElement).closest('button, a, input, .MuiIconButton-root, .MuiChip-root')) {
            return;
        }

        setIsDragging(true);
        dragStartRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            posX: position.x,
            posY: position.y
        };

        try {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } catch {
            // Fallback silencioso si no soporta capture
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging || !isDetached) return;
        const deltaX = e.clientX - dragStartRef.current.startX;
        const deltaY = e.clientY - dragStartRef.current.startY;

        // Limitar dentro de los bordes visibles de la pantalla
        const newX = Math.max(10, Math.min(window.innerWidth - 250, dragStartRef.current.posX + deltaX));
        const newY = Math.max(10, Math.min(window.innerHeight - 100, dragStartRef.current.posY + deltaY));

        setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (isDragging) {
            setIsDragging(false);
            try {
                (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
            } catch {}
        }
    };

    return (
        <Dialog 
            open={open} 
            onClose={handleClose}
            maxWidth={isDetached ? false : "lg"}
            fullWidth={!isDetached}
            disableEnforceFocus 
            hideBackdrop={isDetached}
            disableScrollLock={isDetached}
            slotProps={{
                backdrop: {
                    sx: isDetached ? { backgroundColor: 'transparent' } : {}
                }
            }}
            sx={isDetached ? {
                pointerEvents: 'none',
                zIndex: 1400,
                '& .MuiDialog-container': {
                    pointerEvents: 'none',
                    display: 'block'
                }
            } : {
                zIndex: 1400
            }}
            PaperProps={{
                elevation: isDetached ? 24 : 6,
                sx: isDetached ? {
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: 'min(640px, calc(100vw - 40px))',
                    height: 'min(82vh, 850px)',
                    margin: 0,
                    maxWidth: 'none',
                    maxHeight: 'none',
                    pointerEvents: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)',
                    transition: isDragging ? 'none' : 'box-shadow 0.2s ease',
                    overflow: 'hidden'
                } : {
                    borderRadius: '16px',
                    overflow: 'hidden'
                }
            }}
        >
            <DialogTitle 
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                sx={{ 
                    m: 0, 
                    p: 1.5, 
                    px: 2,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: isDetached ? 'primary.50' : 'white',
                    cursor: isDetached ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    userSelect: 'none',
                    touchAction: 'none'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
                    <Box sx={{ 
                        p: 1, 
                        bgcolor: 'error.lighter', 
                        color: 'error.main', 
                        borderRadius: '10px',
                        display: 'flex',
                        flexShrink: 0
                    }}>
                        <FileText size={18} />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="subtitle2" fontWeight={800} lineHeight={1.2} noWrap>
                                Vista Previa del Documento
                            </Typography>
                            {isDetached && (
                                <Chip 
                                    size="small" 
                                    icon={<Move size={12} className="text-primary-600" />} 
                                    label="Flotante / Arrastrable" 
                                    variant="outlined"
                                    color="primary"
                                    sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700 }}
                                />
                            )}
                        </Box>
                        <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block', maxWidth: isDetached ? '260px' : '400px' }}>
                            {title}
                        </Typography>
                    </Box>
                </Box>

                {isDetached && (
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.disabled', opacity: 0.7 }}>
                        <GripHorizontal size={20} />
                    </Box>
                )}
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                    {/* Botón para desacoplar / acoplar modo flotante */}
                    <Tooltip title={isDetached ? "Acoplar modal al centro" : "Desacoplar ventana flotante (para comparar con formulario)"}>
                        <IconButton 
                            onClick={toggleDetached} 
                            size="small" 
                            color={isDetached ? "primary" : "default"}
                            sx={{ 
                                bgcolor: isDetached ? 'primary.100' : 'grey.100',
                                '&:hover': { bgcolor: isDetached ? 'primary.200' : 'grey.200' },
                                borderRadius: '8px',
                                p: '6px'
                            }}
                        >
                            {isDetached ? <Minimize2 size={16} /> : <Move size={16} />}
                        </IconButton>
                    </Tooltip>

                    {/* Botón para abrir en nueva pestaña */}
                    {blobUrl && (
                        <Tooltip title="Abrir en pestaña nueva">
                            <IconButton 
                                onClick={handleOpenInNewTab} 
                                size="small" 
                                sx={{ 
                                    bgcolor: 'grey.100',
                                    '&:hover': { bgcolor: 'grey.200' },
                                    borderRadius: '8px',
                                    p: '6px'
                                }}
                            >
                                <ExternalLink size={16} />
                            </IconButton>
                        </Tooltip>
                    )}

                    {/* Botón Descargar */}
                    <Button 
                        variant="primary" 
                        size="sm" 
                        onClick={handleDownload}
                        className="text-xs h-8 px-2.5 shadow-sm"
                        icon={Download}
                    >
                        Descargar
                    </Button>

                    {/* Botón Cerrar */}
                    <IconButton 
                        onClick={handleClose} 
                        size="small" 
                        sx={{ 
                            color: 'text.secondary', 
                            ml: 0.5,
                            '&:hover': { bgcolor: 'error.lighter', color: 'error.main' }
                        }}
                    >
                        <X size={18} />
                    </IconButton>
                </Box>
            </DialogTitle>
            
            <DialogContent sx={{ p: 0, bgcolor: 'grey.50', height: isDetached ? 'calc(100% - 56px)' : '75vh', overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    {isLoading ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', bgcolor: 'white' }}>
                            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                            <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                Cargando documento seguro...
                            </Typography>
                        </Box>
                    ) : error ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', bgcolor: 'white', p: 4, textAlign: 'center' }}>
                            <FileText size={64} className="text-red-100 mb-4" />
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Error al cargar
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                {error}
                            </Typography>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar Ventana
                            </Button>
                        </Box>
                    ) : (
                        <iframe
                            src={`${blobUrl}#toolbar=1`}
                            title={title}
                            className="w-full h-full border-none"
                        />
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default PdfModal;
