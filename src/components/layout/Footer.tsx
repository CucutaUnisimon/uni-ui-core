import React from 'react';

export interface FooterProps {
  version?: string;
  year?: number;
}

/**
 * Componente Footer
 * Pie de página compacto con información institucional
 */
export const Footer: React.FC<FooterProps> = ({ 
  version = '1.0.0',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="border-gray-100 border-t mt-auto bg-gray-50/50">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-slate-400">
            © {year} Universidad Simón Bolívar. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              Versión del Sistema: <span className="font-semibold">{version}</span>
            </p>
            <span className="text-slate-200">|</span>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              Términos y Condiciones
            </a>
            <span className="text-slate-200">|</span>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
