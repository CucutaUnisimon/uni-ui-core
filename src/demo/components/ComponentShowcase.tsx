import React from 'react';
import { CodeSnippet } from './CodeSnippet';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  importCode: string;
  children: React.ReactNode;
  exampleCode?: string;
  propsTable?: Array<{
    prop: string;
    type: string;
    default?: string;
    description: string;
  }>;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  importCode,
  children,
  exampleCode,
  propsTable,
}) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Encabezado */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
        <p className="text-slate-600 text-sm mt-1">{description}</p>
        <div className="mt-3">
          <code className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200 font-mono inline-block">
            {importCode}
          </code>
        </div>
      </div>

      {/* Vista interactiva / Demo */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Previsualización interactiva
        </div>
        <div className="min-h-[60px] flex flex-wrap items-center gap-4">
          {children}
        </div>
      </div>

      {/* Código de ejemplo */}
      {exampleCode && <CodeSnippet code={exampleCode} title="Ejemplo de Implementación" />}

      {/* Tabla de Props */}
      {propsTable && propsTable.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-semibold text-xs text-slate-700">
            Propiedades (Props)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 text-slate-500 font-mono">
                <tr>
                  <th className="px-4 py-2">Prop</th>
                  <th className="px-4 py-2">Tipo</th>
                  <th className="px-4 py-2">Default</th>
                  <th className="px-4 py-2">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {propsTable.map((p) => (
                  <tr key={p.prop} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-bold text-emerald-700">{p.prop}</td>
                    <td className="px-4 py-2.5 text-indigo-600">{p.type}</td>
                    <td className="px-4 py-2.5 text-slate-400">{p.default || '-'}</td>
                    <td className="px-4 py-2.5 font-sans text-slate-600">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
