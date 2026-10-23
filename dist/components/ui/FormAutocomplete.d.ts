import React from 'react';
import { AutocompleteProps } from '@mui/material';
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
declare const FormAutocomplete: <T>({ label, placeholder, error, helperText, icon, loading, required, fullWidth, ...props }: FormAutocompleteProps<T>) => React.JSX.Element;
export default FormAutocomplete;
