import React, { ReactNode } from 'react';
import { TextField, InputAdornment, type TextFieldProps } from '@mui/material';

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
export const FormTextArea: React.FC<FormTextAreaProps> = ({
    icon,
    maxLength,
    showCounter = true,
    minRows = 3,
    label,
    required,
    ...props
}) => {
    const currentLength = props.value ? String(props.value).length : 0;
    
    // Variable independiente para el contador
    const charCounter = (showCounter && maxLength) ? `${currentLength} / ${maxLength}` : null;

    const customLabel = required && label ? (
        <span>
            {label} <span className="text-red-500 font-bold">*</span>
        </span>
    ) : label;

    return (
        <div className="flex flex-col w-full gap-0.5">
            <TextField
                {...props}
                fullWidth
                variant="outlined"
                multiline
                minRows={minRows}
                label={customLabel}
                required={false}
                inputProps={{
                    maxLength,
                    ...props.inputProps,
                    style: {
                        ...props.inputProps?.style,
                        wordBreak: 'break-word',
                    }
                }}
                // En TextArea el icono suele quedar mejor alineado al inicio superior
                InputProps={{
                    ...props.InputProps,
                    startAdornment: icon ? (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                            <span className="text-gray-400 flex items-center ml-1">{icon}</span>
                        </InputAdornment>
                    ) : props.InputProps?.startAdornment,
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                         borderRadius: 'var(--radius-md) !important',
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: '#fcfcfc',
                        },
                        // Ajuste para que el texto no se pegue al icono en multiline
                        '& textarea': {
                            paddingTop: icon ? '4px' : '0'
                        }
                    },
                    ...props.sx
                }}
            />
            
            {/* Contador de caracteres independiente */}
            {charCounter && (
                <div className="flex justify-end px-2 mt-1">
                    <span className={`text-[11px] tabular-nums tracking-tighter ${props.error ? 'text-red-500' : 'text-gray-400 opacity-80'}`}>
                        {charCounter}
                    </span>
                </div>
            )}
        </div>
    );
};

export default FormTextArea;
