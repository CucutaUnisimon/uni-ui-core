import React, { ReactNode } from 'react';
import {
    TextField,
    InputAdornment,
    type TextFieldProps,
} from '@mui/material';

// ─── FormField (TextField con icono) ─────────────────────────────────────────

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
export const FormField: React.FC<FormFieldProps> = ({ 
    icon, 
    maxLength, 
    showCounter = true,
    rows,
    multiline,
    label,
    required,
    ...props 
}) => {
    const currentLength = props.value ? String(props.value).length : 0;
    
    // Nueva variable independiente para el contador
    const charCounter = (showCounter && maxLength) ? `${currentLength} / ${maxLength}` : null;
    
    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    return (
        <div className="flex flex-col w-full gap-0.5">
            <TextField
                fullWidth
                variant="outlined"
                multiline={multiline}
                minRows={multiline ? (rows || 3) : undefined}
                label={customLabel}
                required={false}
                inputProps={{
                    maxLength,
                    ...props.inputProps,
                    style: {
                        ...props.inputProps?.style,
                        wordBreak: 'break-word',
                        backgroundColor: 'white',
                    }
                }}
                // Devolvemos el helperText a su comportamiento original (solo para errores/mensajes)
                helperText={props.helperText}
                InputProps={{
                    ...props.InputProps,
                    startAdornment: icon ? (
                        <InputAdornment position="start">
                            <span className="text-gray-400 flex items-center">{icon}</span>
                        </InputAdornment>
                    ) : props.InputProps?.startAdornment,
                }}
                {...props}
            />
            
            {/* Elemento independiente para el contador de caracteres */}
            {charCounter && (
                <div className="flex justify-end px-2 mt-1">
                    <span className={`text-[11px]  tabular-nums tracking-tighter ${props.error ? 'text-red-500' : 'text-gray-400 opacity-80'}`}>
                        {charCounter}
                    </span>
                </div>
            )}
        </div>
    );
};

