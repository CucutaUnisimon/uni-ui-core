import React, { ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Switch } from '@mui/material';

interface SelectionListItemProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    labelTag?: string;
}

/**
 * SelectionListItem — Un item de lista optimizado para selección (con switch).
 * Diseñado para ser altamente legible y estético.
 */
const SelectionListItem: React.FC<SelectionListItemProps> = ({
    title,
    subtitle,
    icon,
    checked,
    onChange,
    disabled = false,
    labelTag
}) => {
    return (
        <div 
            onClick={!disabled ? onChange : undefined}
            className={`
                group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer
                ${checked 
                    ? 'bg-primary/5 border-primary/20 shadow-sm' 
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {/* Icono con contenedor dinámico */}
            <div className={`
                p-3 rounded-xl transition-colors
                ${checked ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}
            `}>
                {icon || <ShieldCheck size={20} />}
            </div>

            {/* Texto y Contenido */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                    <h4 className={`text-sm font-black ${checked ? 'text-primary' : 'text-gray-900'}`}>
                        {title}
                    </h4>
                    {labelTag && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-gray-100 text-gray-400 lowercase tracking-tighter">
                            {labelTag}
                        </span>
                    )}
                </div>
                {subtitle && (
                    <p className="text-xs font-semibold text-gray-500 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Switch de Acción */}
            <div onClick={(e) => e.stopPropagation()}>
                <Switch
                    size="small"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: 'var(--primary-main)',
                            '& + .MuiSwitch-track': {
                                backgroundColor: 'var(--primary-main)',
                                opacity: 0.5
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export { SelectionListItem };
export default SelectionListItem;
