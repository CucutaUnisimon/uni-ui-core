import React, { ReactNode } from 'react';
import { type TextFieldProps } from '@mui/material';
interface FormFieldProps extends Omit<TextFieldProps, 'variant'> {
    /** Icono que aparece a la izquierda del campo */
    icon?: ReactNode;
    /** Límite de caracteres */
    maxLength?: number;
    /** Si debe mostrar el contador de caracteres */
    showCounter?: boolean;
}
/**
 * FormField — TextField reutilizable con icono opcional a la izquierda
 * Soporta límite de caracteres y contador automático
 */
export declare const FormField: React.FC<FormFieldProps>;
export {};
