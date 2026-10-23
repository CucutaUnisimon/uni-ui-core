import React from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

interface PhoneCellProps {
    value: string | undefined | null;
}

export const PhoneCell: React.FC<PhoneCellProps> = ({ value }) => {
    if (!value) return <span className="text-gray-400 italic">-</span>;

    try {
        const parsed = parsePhoneNumberFromString(value);
        if (parsed && parsed.country) {
            const flagUrl = `https://flagcdn.com/${parsed.country.toLowerCase()}.svg`;
            return (
                <div className="flex items-center gap-2.5 font-mono h-full">
                    <img 
                        src={flagUrl} 
                        alt={parsed.country}
                        style={{
                            width: '20px',
                            height: '14px',
                            objectFit: 'cover',
                            borderRadius: '2px',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            flexShrink: 0
                        }}
                        title={parsed.country}
                    />
                    <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                        {parsed.formatInternational()}
                    </span>
                </div>
            );
        }
    } catch (error) {
        console.error("Error parsing phone number inside PhoneCell:", error);
    }

    return <span className="text-sm text-gray-700">{value}</span>;
};

export default PhoneCell;
