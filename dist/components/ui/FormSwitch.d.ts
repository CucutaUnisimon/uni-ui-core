import React, { ReactNode } from 'react';
interface FormSwitchProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: ReactNode;
    description?: string;
    className?: string;
    disabled?: boolean;
}
/**
 * FormSwitch - Componente reutilizable para interruptores con etiqueta e icono
 * Abstrae el patrón FormControlLabel + Switch + Box de MUI
 */
export declare const FormSwitch: React.FC<FormSwitchProps>;
export default FormSwitch;
