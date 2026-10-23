import React from 'react';
import { Box, Typography } from '@mui/material';

interface FormSectionProps {
    title: string;
    subtitle?: string | React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'gray' | 'white';
}

/**
 * FormSection — Componente para agrupar campos en secciones con título, icono y estilo unificado.
 */
const FormSection: React.FC<FormSectionProps> = ({
    title,
    subtitle,
    icon,
    children,
    className = "",
    variant = 'gray'
}) => {
    
    const variantStyles = {
        default: "",
        gray: "p-4 bg-gray-50 rounded-2xl border border-gray-100",
        white: "p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
    };

    return (
        <Box className={`${variantStyles[variant]} flex flex-col gap-4 ${className}`}>
            <div className="flex flex-col gap-1">
                <Typography variant="subtitle1" className="font-bold flex items-center gap-2 text-primary">
                    {icon && <span className="flex items-center">{icon}</span>}
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="caption" className="text-gray-500">
                        {subtitle}
                    </Typography>
                )}
            </div>
            
            <Box className="w-full">
                {children}
            </Box>
        </Box>
    );
};

export { FormSection };
export default FormSection;
