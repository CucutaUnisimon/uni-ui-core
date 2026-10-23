import React, { ReactNode } from 'react';
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
/**
 * FormDate — Componente reutilizable para selección de fechas usando MUI DatePicker
 * Soporta múltiples tamaños: xs, sm, md, lg
 */
export declare const FormDate: React.FC<FormDateProps>;
export default FormDate;
