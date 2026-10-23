import React from 'react';
import { Search, Home, ArrowLeft, Settings, FileText, Code } from 'lucide-react';
import Button from '../ui/Button';
import defaultLogo from '../../assets/logoUnisimon.png';

export interface NotFoundProps {
    title?: string;
    description?: string;
    homeText?: string;
    backText?: string;
    onNavigateHome?: () => void;
    onNavigateBack?: () => void;
    logoSrc?: string;
    showLogo?: boolean;
}

/**
 * Componente NotFound (404) Institucional
 * Pantalla de error 404 personalizada con estética y tokens de la Universidad Simón Bolívar
 */
export const NotFound: React.FC<NotFoundProps> = ({
    title = 'Página no encontrada',
    description = 'Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, verifica la URL o regresa al inicio del portal.',
    homeText = 'Ir al Inicio',
    backText = 'Regresar',
    onNavigateHome,
    onNavigateBack,
    logoSrc = defaultLogo,
    showLogo = true
}) => {
    const handleBack = () => {
        if (onNavigateBack) {
            onNavigateBack();
        } else if (typeof window !== 'undefined' && window.history.length > 1) {
            window.history.back();
        }
    };

    const handleHome = () => {
        if (onNavigateHome) {
            onNavigateHome();
        } else if (typeof window !== 'undefined') {
            window.location.href = '/dashboard';
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden font-inter">
            {/* Elementos Decorativos de Fondo (Blur effect) */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
            
            {/* Iconos Flotantes Decorativos */}
            <div className="absolute top-[20%] left-[15%] text-primary/30 animate-pulse hidden md:block">
                <FileText size={40} />
            </div>
            <div className="absolute top-[15%] right-[25%] text-primary/30 animate-bounce transition-all duration-[3000ms] hidden md:block">
                <Settings size={32} />
            </div>
            <div className="absolute bottom-[20%] right-[15%] text-primary/30 animate-pulse hidden md:block">
                <Code size={36} />
            </div>
            <div className="absolute bottom-[25%] left-[20%] text-primary/30 hidden md:block">
                <Settings size={24} />
            </div>

            <div className="max-w-2xl w-full flex flex-col items-center text-center z-10">
                {/* Laptop Estilizada con el 404 */}
                <div className="relative mb-12 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-[280px] h-[170px] md:w-[320px] md:h-[190px] bg-white border-[8px] border-gray-100 rounded-2xl shadow-premium flex items-center justify-center relative overflow-hidden">
                            <span className="text-8xl md:text-[110px] font-black text-[#1e293b] tracking-tighter select-none opacity-90 leading-none">
                                404
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-gray-50/50 pointer-events-none" />
                        </div>
                        <div className="w-[320px] h-[12px] md:w-[360px] md:h-[14px] bg-gray-200 rounded-b-2xl mx-auto -mt-1 shadow-md" />
                        
                        {/* Lupa Superpuesta */}
                        <div className="absolute -bottom-8 -left-6 md:-left-12 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-premium border-4 border-gray-50 flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                             <Search size={48} className="text-secondary-light" />
                        </div>
                    </div>
                    
                    <div className="absolute -top-6 -right-6 w-16 h-2 bg-primary/40 rounded-full rotate-45" />
                    <div className="absolute top-16 -right-16 w-10 h-2 bg-primary/40 rounded-full" />
                    <div className="absolute bottom-24 -right-12 w-14 h-2 bg-primary/40 rounded-full -rotate-12" />
                </div>

                {/* Contenido de Texto */}
                <h1 className="text-4xl md:text-5xl font-black text-[#1e293b] mb-4 tracking-tight">
                    {title}
                </h1>
                
                <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium px-4">
                    {description}
                </p>

                {/* Acciones */}
                <div className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center px-4">
                    <Button 
                        variant="ghost" 
                        size="lg"
                        className="px-10 py-4 font-bold border-2 border-transparent hover:border-gray-100 shadow-sm"
                        icon={ArrowLeft}
                        onClick={handleBack}
                    >
                        {backText}
                    </Button>
                    
                    <Button 
                        variant="primary" 
                        size="lg"
                        className="px-12 py-4 font-bold shadow-xl shadow-green-900/10"
                        icon={Home}
                        onClick={handleHome}
                    >
                        {homeText}
                    </Button>
                </div>

                {/* Marca Corporativa en el Footer */}
                {showLogo && logoSrc && (
                    <div className="mt-20 opacity-40 hover:opacity-80 transition-opacity duration-700">
                        <img 
                            src={logoSrc} 
                            alt="Universidad Simón Bolívar" 
                            className="h-12 w-auto object-contain grayscale brightness-0"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotFound;
