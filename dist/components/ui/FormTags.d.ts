import React from 'react';
export interface FormTagsProps {
    label: string;
    placeholder?: string;
    tags: string[];
    onTagsChange: (tags: string[]) => void;
    options?: string[];
    icon?: React.ReactNode;
    error?: boolean;
    helperText?: string;
    required?: boolean;
    validate?: (tag: string) => boolean;
}
/**
 * FormTags — Componente para entrada de tags (etiquetas) usando Autocomplete de MUI.
 */
declare const FormTags: React.FC<FormTagsProps>;
export { FormTags };
export default FormTags;
