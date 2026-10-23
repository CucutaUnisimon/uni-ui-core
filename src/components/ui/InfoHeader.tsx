import React, { ReactNode } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface InfoHeaderProps {
    /** Define si el elemento representado está activo (determina colores verde/rojo de los iconos) */
    isActive: boolean;
    /** Título principal (ej. nombre del rol o perfil) */
    title: string;
    /** Subtítulo superior descriptivo (ej. "Configurando Rol") */
    subtitle?: string;
    /** Texto informativo inferior (ej. "5 permisos activos de 20 disponibles") */
    stats?: string;
    /** Nodo de LucideIcon que se muestra grande de fondo como marca de agua */
    backgroundIcon?: ReactNode;
}

/**
 * InfoHeader
 * Componente visual de cabecera reutilizable para mostrar información de un
 * elemento principal en un modal o detalle (Roles, Perfiles, Usuarios).
 * Integrado 100% con las clases temáticas de Tailwind.
 */
const InfoHeader: React.FC<InfoHeaderProps> = ({
    isActive,
    title,
    subtitle,
    stats,
    backgroundIcon,
}) => {
    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-sm transition-all duration-300">
            {/* Ícono central de estado (Activo/Inactivo) */}
            <div className={`p-4 rounded-xl mb-3 shadow-premium ${isActive ? 'bg-primary text-primary-contrast shadow-primary/20' : 'bg-error text-white shadow-red-200'}`}>
                {isActive ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
            </div>
            
            {/* Contenidos de texto */}
            <div className="text-center z-10">
                <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                    {subtitle}
                </p>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    {title}
                </h3>
            </div>
            
            {/* Estadísticas (Opcional) */}
            {stats && (
                <div className="flex-1 px-4 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                    {stats}
                </div>
            )}
            
            {/* Elemento Decorativo: Ícono de marca de agua */}
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] rotate-12 text-gray-900 pointer-events-none">
                {backgroundIcon}
            </div>
        </div>
    );
};

export default InfoHeader;
