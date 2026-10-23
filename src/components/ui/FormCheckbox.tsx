import React, { ReactNode } from 'react';
import { FormControlLabel, Checkbox, Box } from '@mui/material';

interface FormCheckboxProps {
    label?: ReactNode;
    children?: ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    className?: string;
    description?: string;
}

/**
 * FormCheckbox - Componente reutilizable y premium para checkbox con etiqueta.
 * Abstrae el patrón FormControlLabel + Checkbox de MUI, con estilo consistente de tarjeta y soporte de envoltura de texto.
 * Soporta definir el contenido vía prop `label` o como `children`.
 */
export const FormCheckbox: React.FC<FormCheckboxProps> = ({
    label,
    children,
    checked,
    onChange,
    disabled = false,
    color = 'primary',
    className = "",
    description
}) => {
    return (
        <FormControlLabel
            disabled={disabled}
            className={`m-0 p-2.5 rounded-xl border transition-all duration-200 w-full ${
                checked
                    ? 'bg-primary/5 border-primary/10'
                    : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
            } ${className}`}
            control={
                <Checkbox
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    color={color}
                    disabled={disabled}
                    size="small"
                    sx={{
                        padding: '4px',
                    }}
                />
            }
            label={
                <Box className="flex flex-col ml-1.5 w-full min-w-0">
                    <div className={`text-[11px] leading-tight transition-colors w-full min-w-0 ${checked ? 'text-primary font-bold' : 'text-gray-700'}`}>
                        {children || label}
                    </div>
                    {description && (
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                            {description}
                        </span>
                    )}
                </Box>
            }
            sx={{
                alignItems: 'center',
                width: '100%',
                margin: 0,
                '& .MuiFormControlLabel-label': {
                    width: '100%',
                    minWidth: 0,
                    display: 'block'
                }
            }}
        />
    );
};

export default FormCheckbox;

