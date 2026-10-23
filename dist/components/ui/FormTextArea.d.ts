import React, { ReactNode } from 'react';
import { type TextFieldProps } from '@mui/material';
interface FormTextAreaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
    /** Icono que aparece en la parte superior izquierda */
    icon?: ReactNode;
    /** Límite de caracteres */
    maxLength?: number;
    /** Si debe mostrar el contador de caracteres */
    showCounter?: boolean;
    /** Filas mínimas iniciales */
    minRows?: number;
}
/**
 * FormTextArea — Componente reutilizable para campos de texto multilínea (TextArea)
 * Incluye soporte para auto-crecimiento, contador de caracteres y estilos premium
 */
export declare const FormTextArea: React.FC<FormTextAreaProps>;
export default FormTextArea;
