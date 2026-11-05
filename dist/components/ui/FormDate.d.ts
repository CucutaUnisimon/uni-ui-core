import React, { ReactNode } from 'react';
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
export declare const FormDate: React.FC<FormDateProps>;
export default FormDate;
