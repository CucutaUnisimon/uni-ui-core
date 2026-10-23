import React from 'react';
import { LucideIcon, Eye, ExternalLink } from 'lucide-react';
import Button from './Button';
import { Tooltip } from '@mui/material';

export interface InfoGridItem {
    label: string;
    value: React.ReactNode;
    icon: LucideIcon;
    highlight?: boolean;
    mono?: boolean;
    colSpan?: 1 | 2 | 3;
    type?: 'text' | 'pdf' | 'url';
    onClick?: () => void;
}

interface InfoGridProps {
    items: InfoGridItem[];
    columns?: 1 | 2 | 3;
    noDataMessage?: string;
    noDataIcon?: LucideIcon;
}

const InfoGrid: React.FC<InfoGridProps> = ({ items, columns = 1, noDataMessage, noDataIcon }) => {
    if (items.length === 0 && noDataMessage) {
        const NoDataIcon = noDataIcon || Eye;
        return (
            <div className="flex flex-col items-center justify-center py-10 gap-3 border border-dashed border-gray-200 rounded-xl bg-gray-50/50 w-full">
                <NoDataIcon size={32} className="text-gray-300" />
                <p className="text-gray-400 text-xs font-semibold">{noDataMessage}</p>
            </div>
        );
    }

    const gridColsClass = 
        columns === 2 
            ? 'grid-cols-1 sm:grid-cols-2' 
            : columns === 3 
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' 
                : 'grid-cols-1';

    return (
        <div className={`grid gap-4 ${gridColsClass}`}>
            {items.map((item, index) => {
                const Icon = item.icon;
                const colSpanClass = 
                    item.colSpan === 2 
                        ? 'col-span-1 sm:col-span-2' 
                        : item.colSpan === 3 
                            ? 'col-span-1 sm:col-span-2 md:col-span-3' 
                            : '';
                
                return (
                    <div 
                        key={index} 
                        className={`flex items-start gap-4 bg-white p-3 rounded-xl border border-gray-50 shadow-sm transition-all duration-200 hover:border-gray-100 hover:shadow-md group ${colSpanClass}`}
                    >
                        <div className={`p-2 rounded-lg transition-colors duration-200 ${
                            item.highlight 
                            ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                        }`}>
                            <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-gray-500">
                                {item.label}
                            </p>
                            <div className={`text-sm text-gray-400 break-words whitespace-pre-line ${
                                item.mono ? 'font-mono text-xs break-all' : ''
                            }`}>
                                {item.value}
                            </div>
                        </div>
                        
                        {item.type === 'pdf' && item.value !== 'No registrado' && (
                            <div className="flex-shrink-0">
                                <Tooltip title="Visualizar documento PDF" arrow placement="top">
                                    <span>
                                        <Button 
                                            size="sm" 
                                            variant="ghost" 
                                            onClick={item.onClick}
                                            className="h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200"
                                        >
                                            <Eye size={18} />
                                        </Button>
                                    </span>
                                </Tooltip>
                            </div>
                        )}

                        {item.type === 'url' && item.value !== 'No registrado' && item.value !== 'No disponible' && !!item.value && (
                            (() => {
                                const strValue = typeof item.value === 'string' ? item.value.trim() : '';
                                if (!strValue) return null;

                                const isValidUrl = (urlStr: string) => {
                                    try {
                                        const formatted = urlStr.startsWith('http://') || urlStr.startsWith('https://')
                                            ? urlStr
                                            : `https://${urlStr}`;
                                        const parsed = new URL(formatted);
                                        return parsed.hostname.includes('.');
                                    } catch {
                                        return false;
                                    }
                                };

                                if (!isValidUrl(strValue)) return null;

                                return (
                                    <div className="flex-shrink-0">
                                        <Tooltip title="Abrir sitio web" arrow placement="top">
                                            <span>
                                                <Button 
                                                    size="sm" 
                                                    variant="ghost" 
                                                    onClick={() => {
                                                        if (item.onClick) {
                                                            item.onClick();
                                                        } else {
                                                            const formattedUrl = strValue.startsWith('http://') || strValue.startsWith('https://') 
                                                                ? strValue 
                                                                : `https://${strValue}`;
                                                            window.open(formattedUrl, '_blank', 'noopener,noreferrer');
                                                        }
                                                    }}
                                                    className="h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200"
                                                >
                                                    <ExternalLink size={18} />
                                                </Button>
                                            </span>
                                        </Tooltip>
                                    </div>
                                );
                            })()
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default InfoGrid;
