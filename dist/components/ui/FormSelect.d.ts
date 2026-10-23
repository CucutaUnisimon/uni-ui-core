import React, { ReactNode } from 'react';
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
declare const FormSelect: React.FC<FormSelectProps>;
export default FormSelect;
