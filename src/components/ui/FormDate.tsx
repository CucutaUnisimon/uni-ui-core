import React, { ReactNode } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment } from '@mui/material';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Extender dayjs para soportar parsing de formatos personalizados
dayjs.extend(customParseFormat);

export interface FormDateProps {
    label?: ReactNode;
    value: string | null;
    onChange: (date: string) => void;
    icon?: ReactNode;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
}

/**
 * FormDate — Componente reutilizable para selección de fechas usando MUI DatePicker
 * Proporciona una interfaz limpia y estándar que respeta el tema general
 */
export const FormDate: React.FC<FormDateProps> = ({
    label,
    value,
    onChange,
    icon,
    error,
    helperText,
    disabled,
    required,
}) => {
    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    return (
        <DatePicker
            label={customLabel}
            format="DD/MM/YYYY"
            localeText={{
                fieldDayPlaceholder: () => 'dd',
                fieldMonthPlaceholder: () => 'mm',
                fieldYearPlaceholder: () => 'yyyy',
            }}
            value={value ? dayjs(value, ['DD-MM-YYYY', 'YYYY-MM-DD']) : null}
            onChange={(newValue) => {
                if (newValue && newValue.isValid()) {
                    onChange(newValue.format('DD-MM-YYYY'));
                } else {
                    onChange('');
                }
            }}
            disabled={disabled}
            slotProps={{
                textField: {
                    fullWidth: true,
                    variant: 'outlined',
                    error,
                    helperText,
                    sx: {
                        backgroundColor: 'white !important',
                        borderRadius: 'var(--radius-md) !important',
                        '&:hover': {
                            backgroundColor: '#fcfcfc !important',
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'white !important',
                        }
                    },
                    slotProps: {
                        input: {
                            startAdornment: icon ? (
                                <InputAdornment position="start">
                                    <span className="text-gray-400 flex items-center ml-1">{icon}</span>
                                </InputAdornment>
                            ) : undefined,
                        } as any
                    } as any
                },
                popper: {
                    disablePortal: false, // Mantener en portal pero asegurar zIndex
                    sx: {
                        zIndex: 3000, 
                        '& .MuiPaper-root': {
                            borderRadius: '16px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                            border: '1px solid #f0f0f0',
                            marginTop: '8px',
                            backgroundColor: 'white !important'
                        }
                    }
                },
                actionBar: {
                    actions: ['cancel', 'accept'],
                    sx: {
                        '& .MuiButton-root': {
                            fontWeight: 'bold',
                            textTransform: 'none',
                            borderRadius: '8px',
                            px: 3
                        },
                        '& .MuiButton-textPrimary': {
                            color: 'primary.main',
                        }
                    }
                }
            }}
        />
    );
};

export default FormDate;
