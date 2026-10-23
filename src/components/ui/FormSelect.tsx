import React, { ReactNode } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    InputAdornment
} from '@mui/material';

interface SelectOption {
    label: string;
    value: string | number | boolean;
}

interface FormSelectProps {
    label: ReactNode;
    value: string | number | boolean;
    onChange: (value: string) => void;
    options: SelectOption[];
    fullWidth?: boolean;
    icon?: ReactNode;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
}

/**
 * FormSelect — Select reutilizable con opciones declarativas y soporte para iconos.
 * Los estilos de hover y focus se manejan globalmente en muiTheme.ts via MuiOutlinedInput.
 */
const FormSelect: React.FC<FormSelectProps> = ({
    label,
    value,
    onChange,
    options,
    fullWidth = true,
    icon,
    error,
    helperText,
    disabled = false,
    required,
}) => {
    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    return (
        <FormControl 
            fullWidth={fullWidth} 
            error={error}
            variant="outlined"
            disabled={disabled}
             sx={{backgroundColor: 'white'}}
        >
            <InputLabel>{customLabel}</InputLabel>
            <Select
                value={String(value)}
                label={customLabel}
                disabled={disabled}
                onChange={(e) => onChange(String(e.target.value))}
                startAdornment={
                    icon ? (
                        <InputAdornment position="start">
                            <span className="text-gray-400 flex items-center">
                                {icon}
                            </span>
                        </InputAdornment>
                    ) : null
                }
            >
                {options.map((opt) => (
                    <MenuItem key={String(opt.value)} value={String(opt.value)}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
            {helperText && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    {helperText}
                </Typography>
            )}
        </FormControl>
    );
};

export default FormSelect;
