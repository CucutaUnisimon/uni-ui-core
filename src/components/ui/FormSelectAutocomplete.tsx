import React, { ReactNode } from 'react';
import {
    Autocomplete,
    TextField,
    InputAdornment,
    Typography,
    Box
} from '@mui/material';

interface SelectOption {
    label: string;
    value: string | number | boolean;
}

interface FormSelectAutocompleteProps {
    label: ReactNode;
    value: any;
    onChange: (value: any) => void;
    options: SelectOption[];
    fullWidth?: boolean;
    icon?: ReactNode;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
    loading?: boolean;
    disabled?: boolean;
    required?: boolean;
}

/**
 * FormSelectAutocomplete - Componente de selección con búsqueda (Autocomplete)
 * Mantiene la estética de FormSelect pero permite filtrar opciones.
 */
const FormSelectAutocomplete: React.FC<FormSelectAutocompleteProps> = ({
    label,
    value,
    onChange,
    options,
    fullWidth = true,
    icon,
    error,
    helperText,
    placeholder = "Seleccione una opción...",
    loading = false,
    disabled = false,
    required,
}) => {
    // Encontrar la opción seleccionada actualmente
    const selectedOption = options.find(opt => opt.value === value) || null;

    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    return (
        <Box className="w-full">
            <Autocomplete
                fullWidth={fullWidth}
                options={options}
                loading={loading}
                disabled={disabled}
                getOptionLabel={(option) => option.label || ''}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                value={selectedOption}
                onChange={(_, newValue) => {
                    if (newValue) {
                        onChange(newValue.value);
                    } else {
                        onChange('');
                    }
                }}
                noOptionsText="No se encontraron resultados"
                loadingText="Cargando..."
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={customLabel}
                        placeholder={placeholder}
                        error={error}
                        disabled={disabled}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: icon ? (
                                <>
                                    <InputAdornment position="start" sx={{ ml: 1 }}>
                                        <span className="text-gray-400 flex items-center">
                                            {icon}
                                        </span>
                                    </InputAdornment>
                                    {params.InputProps.startAdornment}
                                </>
                            ) : params.InputProps.startAdornment,
                            style:{backgroundColor: 'white'},
                        }}
                    />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props} key={String(option.value)}>
                        <Typography variant="body2">{option.label}</Typography>
                    </Box>
                )}
            />
            {helperText && (
                <Typography 
                    variant="caption" 
                    color={error ? "error" : "textSecondary"} 
                    sx={{ mt: 0.5, ml: 1.5, display: 'block' }}
                >
                    {helperText}
                </Typography>
            )}
        </Box>
    );
};

export { FormSelectAutocomplete };
export default FormSelectAutocomplete;
