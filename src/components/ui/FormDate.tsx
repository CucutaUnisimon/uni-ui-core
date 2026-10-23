import React, { ReactNode } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment } from '@mui/material';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Extender dayjs para soportar parsing de formatos personalizados
dayjs.extend(customParseFormat);

export type FormDateSize = 'xs' | 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';

interface FormDateProps {
    label?: ReactNode;
    value: string | null;
    onChange: (date: string) => void;
    icon?: ReactNode;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    size?: FormDateSize;
}

const sizeConfig: Record<FormDateSize, { height: string; fontSize: string; padding: string; iconSize: string; muiSize: 'small' | 'medium' }> = {
    xs: { height: '30px', fontSize: '0.75rem', padding: '3px 6px', iconSize: '0.95rem', muiSize: 'small' },
    sm: { height: '36px', fontSize: '0.8125rem', padding: '6px 8px', iconSize: '1.1rem', muiSize: 'small' },
    small: { height: '36px', fontSize: '0.8125rem', padding: '6px 8px', iconSize: '1.1rem', muiSize: 'small' },
    md: { height: '44px', fontSize: '0.875rem', padding: '10px 12px', iconSize: '1.25rem', muiSize: 'medium' },
    medium: { height: '44px', fontSize: '0.875rem', padding: '10px 12px', iconSize: '1.25rem', muiSize: 'medium' },
    lg: { height: '52px', fontSize: '1rem', padding: '14px 16px', iconSize: '1.4rem', muiSize: 'medium' },
    large: { height: '52px', fontSize: '1rem', padding: '14px 16px', iconSize: '1.4rem', muiSize: 'medium' },
};

/**
 * FormDate — Componente reutilizable para selección de fechas usando MUI DatePicker
 * Soporta múltiples tamaños: xs, sm, md, lg
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
    size = 'sm',
}) => {
    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    const currentSize = sizeConfig[size] || sizeConfig.sm;

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
                    size: currentSize.muiSize,
                    error,
                    helperText,
                    sx: {
                        backgroundColor: 'white !important',
                        borderRadius: 'var(--radius-md) !important',
                        '& .MuiInputBase-root': {
                            height: `${currentSize.height} !important`,
                            fontSize: `${currentSize.fontSize} !important`,
                            borderRadius: '10px !important',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? '#ef4444 !important' : '#10b981 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? '#dc2626 !important' : '#059669 !important',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? '#dc2626 !important' : '#0f5a28 !important',
                            borderWidth: '2px !important',
                        },
                        '& .MuiInputLabel-root': {
                            color: error ? '#ef4444 !important' : '#047857 !important',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: error ? '#dc2626 !important' : '#0f5a28 !important',
                        },
                        '& .MuiInputBase-input': {
                            padding: `${currentSize.padding} !important`,
                            fontSize: `${currentSize.fontSize} !important`,
                        },
                        '& .MuiInputAdornment-root': {
                            marginRight: '2px !important',
                            marginLeft: '2px !important',
                        },
                        '& .MuiIconButton-root': {
                            padding: '3px !important',
                            color: error ? '#ef4444 !important' : '#10b981 !important',
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: `${currentSize.iconSize} !important`,
                        },
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