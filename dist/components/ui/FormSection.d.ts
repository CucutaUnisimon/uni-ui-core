import React from 'react';
interface FormSectionProps {
    title: string;
    subtitle?: string | React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'gray' | 'white';
}
/**
 * FormSection — Componente para agrupar campos en secciones con título, icono y estilo unificado.
 */
declare const FormSection: React.FC<FormSectionProps>;
export { FormSection };
export default FormSection;
