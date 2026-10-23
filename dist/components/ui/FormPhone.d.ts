import React from 'react';
import { MuiTelInputProps, MuiTelInputCountry } from 'mui-tel-input';
export declare const LATAM_AND_ES_US_CA_COUNTRIES: MuiTelInputCountry[];
export interface FormPhoneProps extends Omit<MuiTelInputProps, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    error?: boolean;
    helperText?: string;
    onlyCountries?: MuiTelInputCountry[];
    defaultCountry?: MuiTelInputCountry;
}
declare const FormPhone: React.FC<FormPhoneProps>;
export { FormPhone };
export default FormPhone;
