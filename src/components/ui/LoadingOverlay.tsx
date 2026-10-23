import React from 'react';
import { Backdrop, CircularProgress, Typography, Box } from '@mui/material';

interface LoadingOverlayProps {
    open: boolean;
    message?: string;
}

/**
 * LoadingOverlay — Componente reutilizable de bloqueo visual (Backdrop)
 * Ideal para descargas de PDF, guardados pesados o procesos en segundo plano.
 */
export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    open,
    message = 'Procesando, por favor espere...'
}) => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 9999,
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}
            open={open}
        >
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                gap={2} 
                className="bg-white/95 p-6 rounded-2xl shadow-2xl border border-emerald-100 text-gray-800 max-w-sm text-center"
            >
                <CircularProgress color="success" size={48} />
                <Typography variant="body1" className="font-bold text-gray-800">
                    {message}
                </Typography>
            </Box>
        </Backdrop>
    );
};

export default LoadingOverlay;
