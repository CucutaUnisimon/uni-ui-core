import React from 'react';
import { 
    TextField, 
    Box, 
    Chip, 
    InputAdornment, 
    Autocomplete,
} from '@mui/material';
import { X } from 'lucide-react';

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
const FormTags: React.FC<FormTagsProps> = ({
    label,
    placeholder = "Escriba y presione Enter...",
    tags,
    onTagsChange,
    options = [],
    icon,
    error,
    helperText,
    required,
    validate
}) => {

    return (
        <Box className="flex flex-col gap-2 w-full">
            <Autocomplete
                multiple
                freeSolo
                options={options}
                value={tags}
                onChange={(_event, newValue) => {
                    // Si se añade un nuevo valor (freeSolo)
                    const lastValue = newValue[newValue.length - 1];
                    if (typeof lastValue === 'string') {
                        const cleanValue = lastValue.trim().replace(/,/g, '');
                        if (cleanValue && !tags.includes(cleanValue)) {
                            if (validate && !validate(cleanValue)) return;
                            onTagsChange([...tags, cleanValue]);
                        }
                    } else {
                        // Si se elimina o cambia de otra forma
                        onTagsChange(newValue as string[]);
                    }
                }}
                renderTags={(value: string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                        <Chip
                            variant="filled"
                            label={option}
                            size="small"
                            {...getTagProps({ index })}
                            deleteIcon={<X size={14} />}
                            className="bg-primary/10 text-primary font-bold border-0"
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        placeholder={tags.length === 0 ? placeholder : ""}
                        error={error}
                        helperText={helperText}
                        required={required}
                        fullWidth
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <>
                                    {icon && (
                                        <InputAdornment position="start">
                                            <span className="text-gray-400">{icon}</span>
                                        </InputAdornment>
                                    )}
                                    {params.InputProps.startAdornment}
                                </>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                padding: '8px 12px',
                                '& fieldset': { borderColor: '#E5E7EB', borderRadius: '12px' },
                                '&:hover fieldset': { borderColor: '#3b82f6' },
                                '&.Mui-focused fieldset': { borderColor: '#3b82f6', borderWidth: '2px' },
                                minHeight: '56px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                backgroundColor: 'white',
                            }
                        }}
                    />
                )}
            />
        </Box>
    );
};

export { FormTags };
export default FormTags;
