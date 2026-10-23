import React, { ReactNode } from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';

interface FormSwitchProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: ReactNode;
    description?: string;
    className?: string;
    disabled?: boolean;
}

/**
 * FormSwitch - Componente reutilizable para interruptores con etiqueta e icono
 * Abstrae el patrón FormControlLabel + Switch + Box de MUI
 */
export const FormSwitch: React.FC<FormSwitchProps> = ({
    label,
    checked,
    onChange,
    icon,
    description,
    className = "",
    disabled = false
}) => {
    return (
        <FormControlLabel
            disabled={disabled}
            className={`m-0 p-3 rounded-xl border border-transparent transition-all duration-200 w-full ${checked ? 'bg-primary/5 border-primary/10' : 'hover:bg-gray-50'} ${className}`}
            control={
                <Switch
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    color="primary"
                    disabled={disabled}
                />
            }
            label={
                <Box className="flex items-center gap-3 ml-2">
                    {icon && (
                        <div className={`p-1.5 rounded-lg transition-all duration-300 ${checked ? 'bg-primary text-white shadow-md shadow-primary/20 scale-110' : 'bg-gray-100 text-gray-400'}`}>
                            {React.cloneElement(icon as React.ReactElement, { size: 16 })}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className={`text-sm font-black tracking-tight transition-colors ${checked ? 'text-primary' : 'text-gray-700'}`}>
                            {label}
                        </span>
                        {description && (
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                                {description}
                            </span>
                        )}
                    </div>
                </Box>
            }
            sx={{
                '& .MuiFormControlLabel-label': {
                    width: '100%'
                }
            }}
        />
    );
};

export default FormSwitch;
