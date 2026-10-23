import React, { ReactNode } from 'react';
interface FormCheckboxProps {
    label?: ReactNode;
    children?: ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    className?: string;
    description?: string;
}
/**
 * FormCheckbox - Componente reutilizable y premium para checkbox con etiqueta.
 * Abstrae el patrón FormControlLabel + Checkbox de MUI, con estilo consistente de tarjeta y soporte de envoltura de texto.
 * Soporta definir el contenido vía prop `label` o como `children`.
 */
export declare const FormCheckbox: React.FC<FormCheckboxProps>;
export default FormCheckbox;
