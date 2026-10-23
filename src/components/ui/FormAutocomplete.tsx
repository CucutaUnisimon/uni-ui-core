import React from 'react';
import { 
    Autocomplete, 
    TextField, 
    AutocompleteProps,
    InputAdornment,
} from '@mui/material';

interface FormAutocompleteProps<T> extends Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> {
    label: string;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    icon?: React.ReactNode;
    loading?: boolean;
    required?: boolean;
    fullWidth?: boolean;
}

/**
 * FormAutocomplete — Autocomplete reutilizable con soporte para iconos.
 * Sigue el mismo patrón de diseño que FormField y FormSelect.
 */
const FormAutocomplete = <T,>({
    label,
    placeholder,
    error,
    helperText,
    icon,
    loading,
    required,
    fullWidth = true,
    ...props
}: FormAutocompleteProps<T>) => {
    return (
        <Autocomplete
            {...props}
            loading={loading}
            fullWidth={fullWidth}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    error={error}
                    helperText={helperText}
                    required={required}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: icon ? (
                            <>
                                <InputAdornment position="start">
                                    <span className="text-gray-400 flex items-center">{icon}</span>
                                </InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        ) : params.InputProps.startAdornment,
                    }}
                />
            )}
        />
    );
};

export default FormAutocomplete;
