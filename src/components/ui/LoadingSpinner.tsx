import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

interface LoadingSpinnerProps {
    message?: string;
    size?: number;
    color?: 'success' | 'primary' | 'secondary' | 'inherit';
    className?: string;
    minHeight?: string | number;
}

/**
 * LoadingSpinner — Componente reutilizable de carga con indicador circular institucional.
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message,
    size = 40,
    color = 'success',
    className = '',
    minHeight = '200px'
}) => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            minHeight={minHeight}
            gap={2}
            className={`p-6 ${className}`}
        >
            <CircularProgress color={color} size={size} />
            {message && (
                <Typography variant="body2" className="text-gray-500 font-medium animate-pulse text-center">
                    {message}
                </Typography>
            )}
        </Box>
    );
};

export default LoadingSpinner;
