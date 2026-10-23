import React from 'react';
import { MuiTelInput, MuiTelInputProps, MuiTelInputCountry } from 'mui-tel-input';
import { Box } from '@mui/material';

// List of allowed countries by default (Latin America, Spain, USA, Canada)
export const LATAM_AND_ES_US_CA_COUNTRIES: MuiTelInputCountry[] = [
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brasil
    'CL', // Chile
    'CO', // Colombia
    'CR', // Costa Rica
    'CU', // Cuba
    'DO', // República Dominicana
    'EC', // Ecuador
    'SV', // El Salvador
    'GT', // Guatemala
    'HN', // Honduras
    'MX', // México
    'NI', // Nicaragua
    'PA', // Panamá
    'PY', // Paraguay
    'PE', // Perú
    'PR', // Puerto Rico
    'UY', // Uruguay
    'VE', // Venezuela
    'US', // Estados Unidos
    'CA', // Canadá
    'ES', // España
];

export interface FormPhoneProps extends Omit<MuiTelInputProps, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    error?: boolean;
    helperText?: string;
    onlyCountries?: MuiTelInputCountry[];
    defaultCountry?: MuiTelInputCountry;
}

const FormPhone: React.FC<FormPhoneProps> = ({
    value,
    onChange,
    label = 'Teléfono de Contacto',
    error = false,
    helperText,
    onlyCountries = LATAM_AND_ES_US_CA_COUNTRIES,
    defaultCountry = 'CO',
    fullWidth = true,
    variant = 'outlined',
    ...props
}) => {
    return (
        <Box className="flex flex-col w-full gap-0.5">
            <MuiTelInput
                value={value}
                onChange={onChange}
                label={label}
                error={error}
                helperText={helperText}
                onlyCountries={onlyCountries}
                defaultCountry={defaultCountry}
                fullWidth={fullWidth}
                variant={variant}
                {...(props as any)}
                style={{backgroundColor: 'white'}}
            />
        </Box>
    );
};

export { FormPhone };
export default FormPhone;
