import React, { ReactNode } from 'react';
export type FormDateGreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
interface FormDateGreenProps {
    label?: ReactNode;
    value: string | null;
    onChange: (date: string) => void;
    icon?: ReactNode;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    size?: FormDateGreenSize;
}
/**
 * FormDateGreen — Variante compacta con bordes e icono verde esmeralda institucional
 * Soporta múltiples tamaños: xs, sm, md, lg
 */
export declare const FormDateGreen: React.FC<FormDateGreenProps>;
export default FormDateGreen;
