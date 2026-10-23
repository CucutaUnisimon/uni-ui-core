import React, { ReactNode } from 'react';
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
declare const InfoHeader: React.FC<InfoHeaderProps>;
export default InfoHeader;
