import React, { ReactNode } from 'react';
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
declare const FormSelectAutocomplete: React.FC<FormSelectAutocompleteProps>;
export default FormSelectAutocomplete;
