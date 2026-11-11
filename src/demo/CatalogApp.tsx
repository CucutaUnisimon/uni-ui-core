import React, { useState } from 'react';
import {
  Button,
  Card,
  StatCard,
  ModuleCard,
  FormField,
  FormSelect,
  FormDate,
  FormDateGreen,
  FormCheckbox,
  FormSwitch,
  FormTags,
  FormTextArea,
  FormPhone,
  DataTable,
  PageHeader,
  InfoHeader,
  InfoGrid,
  Modal,
  FormModal,
  LoadingSpinner,
  Alert,
  logoUnisimon,
  logoUnisimonBlanco,
  ODS_ICONS,
} from '../../index';
import { ComponentShowcase } from './components/ComponentShowcase';
import {
  Layers,
  Calendar,
  CheckSquare,
  Square,
  FileText,
  Table,
  Image as ImageIcon,
  Palette,
  Eye,
  Send,
  Plus,
  Trash2,
  Download,
  AlertTriangle,
  Info,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const CatalogApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('buttons');
  const [search, setSearch] = useState<string>('');

  // Estados interactivos para pruebas
  const [dateClean, setDateClean] = useState<string | null>('2026-11-11');
  const [dateGreen, setDateGreen] = useState<string | null>('2026-11-11');
  const [inputText, setInputText] = useState('Texto de ejemplo');
  const [selectVal, setSelectVal] = useState('1');
  const [checkVal, setCheckVal] = useState(true);
  const [switchVal, setSwitchVal] = useState(true);
  const [tagsVal, setTagsVal] = useState(['Investigación', 'Innovación', 'Unisimon']);
  const [phoneVal, setPhoneVal] = useState('+57 300 123 4567');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const sections = [
    { id: 'buttons', label: 'Botones (Button)', icon: Zap },
    { id: 'dates', label: 'Fechas (FormDate & FormDateGreen)', icon: Calendar },
    { id: 'forms', label: 'Inputs & Formularios', icon: CheckSquare },
    { id: 'cards', label: 'Tarjetas (Cards & StatCards)', icon: Layers },
    { id: 'tables', label: 'Tablas (DataTable)', icon: Table },
    { id: 'headers', label: 'Headers & Títulos', icon: FileText },
    { id: 'modals', label: 'Modales (Modal & FormModal)', icon: Square },
    { id: 'alerts', label: 'Alertas & SweetAlert2', icon: AlertTriangle },
    { id: 'assets', label: 'Logos, ODS & Activos', icon: ImageIcon },
  ];

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      {/* Sidebar de navegación */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shadow-sm z-20">
        {/* Cabecera Sidebar */}
        <div className="p-5 border-b border-slate-100 flex items-center gap-3">
          <img src={logoUnisimon} alt="Unisimon" className="h-9 w-auto object-contain" />
          <div>
            <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
              Design System
            </div>
            <div className="text-xs font-semibold text-slate-500">Catálogo @unisimon/ui</div>
          </div>
        </div>

        {/* Buscador */}
        <div className="p-3 border-b border-slate-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              placeholder="Buscar componente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-100/70 border border-transparent rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Menú de categorías */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 custom-scroll-thin">
          {filteredSections.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-semibold shadow-sm border border-emerald-100'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-emerald-700' : 'text-slate-400'} />
                <span className="flex-1 truncate">{item.label}</span>
                {isActive && <ChevronRight size={14} className="text-emerald-700" />}
              </button>
            );
          })}
        </nav>

        {/* Info del paquete */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/70 text-[11px] text-slate-500 flex justify-between items-center">
          <span>Versión: <strong className="text-slate-700">v1.1.5</strong></span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
            Activo
          </span>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-8 lg:p-10 max-w-6xl mx-auto overflow-y-auto">
        {/* Banner de Bienvenida */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-950 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-200 text-xs font-medium border border-emerald-400/30 mb-2">
              Librería Oficial Unisimon UI
            </span>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              Catálogo de Componentes Institucionales
            </h1>
            <p className="text-sm text-emerald-100/90 mt-2 leading-relaxed">
              Explora, prueba e implementa los componentes oficiales de la Universidad Simón Bolívar en cualquiera de los micro-frontends copiando los ejemplos en un solo click.
            </p>
          </div>
          <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none">
            <Layers size={220} />
          </div>
        </div>

        {/* 1. SECCIÓN: BOTONES */}
        {activeTab === 'buttons' && (
          <div>
            <ComponentShowcase
              title="Button"
              description="Botón estándar multipropósito que soporta colores institucionales, variantes visuales, tamaños, iconos y estado de carga."
              importCode="import { Button } from '@unisimon/ui';"
              exampleCode={`import { Button } from '@unisimon/ui';
import { Send, Plus, Trash2 } from 'lucide-react';

<Button variant="primary" icon={<Send size={16} />}>
  Guardar Registro
</Button>

<Button variant="secondary">Cancelar</Button>
<Button variant="danger" icon={<Trash2 size={16} />}>Eliminar</Button>
<Button variant="outline" icon={<Plus size={16} />}>Agregar Nuevo</Button>
<Button variant="primary" loading>Guardando...</Button>`}
              propsTable={[
                { prop: 'variant', type: "'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning'", default: "'primary'", description: 'Estilo visual del botón' },
                { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamaño del botón' },
                { prop: 'loading', type: 'boolean', default: 'false', description: 'Muestra un spinner de carga y deshabilita el click' },
                { prop: 'icon', type: 'ReactNode', default: 'undefined', description: 'Icono a la izquierda del texto' },
                { prop: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el botón' },
              ]}
            >
              <Button variant="primary" icon={<Send size={16} />}>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline" icon={<Plus size={16} />}>Outline</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger" icon={<Trash2 size={16} />}>Danger</Button>
              <Button variant="primary" loading>Cargando</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </ComponentShowcase>
          </div>
        )}

        {/* 2. SECCIÓN: FECHAS (FORMDATE vs FORMDATEGREEN) */}
        {activeTab === 'dates' && (
          <div className="space-y-10">
            <ComponentShowcase
              title="FormDate (Estándar y Limpio)"
              description="Selector de fechas limpio y neutro que se integra con los bordes y temas estándar de la aplicación, sin forzar colores verdes permanentes."
              importCode="import { FormDate } from '@unisimon/ui';"
              exampleCode={`import { useState } from 'react';
import { FormDate } from '@unisimon/ui';

const [fecha, setFecha] = useState('2026-11-11');

<FormDate
  label="Fecha de Apertura"
  value={fecha}
  onChange={(newDate) => setFecha(newDate)}
  required
/>`}
              propsTable={[
                { prop: 'label', type: 'ReactNode', default: 'undefined', description: 'Etiqueta del selector' },
                { prop: 'value', type: 'string | null', default: 'null', description: 'Fecha en formato DD-MM-YYYY o YYYY-MM-DD' },
                { prop: 'onChange', type: '(date: string) => void', default: '-', description: 'Callback que retorna la fecha seleccionada en DD-MM-YYYY' },
                { prop: 'required', type: 'boolean', default: 'false', description: 'Agrega el asterisco rojo al label' },
                { prop: 'error', type: 'boolean', default: 'false', description: 'Pinta el borde en rojo de error' },
                { prop: 'helperText', type: 'string', default: 'undefined', description: 'Texto de ayuda o mensaje de error inferior' },
              ]}
            >
              <div className="w-full max-w-sm">
                <FormDate
                  label="Fecha de Apertura (Limpio)"
                  value={dateClean}
                  onChange={(d) => setDateClean(d)}
                  required
                />
                <p className="text-xs text-slate-500 mt-2">Valor actual: <strong className="text-slate-800">{dateClean || 'Vacío'}</strong></p>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="FormDateGreen (Institucional Verde)"
              description="Selector de fechas compacto con bordes e icono verde esmeralda institucional permanente. Admite múltiples tamaños (xs, sm, md, lg)."
              importCode="import { FormDateGreen } from '@unisimon/ui';"
              exampleCode={`import { useState } from 'react';
import { FormDateGreen } from '@unisimon/ui';

const [fecha, setFecha] = useState('2026-11-11');

<FormDateGreen
  label="Fecha de Cierre"
  value={fecha}
  onChange={(newDate) => setFecha(newDate)}
  size="sm"
  required
/>`}
              propsTable={[
                { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: 'Controla la altura y compacidad del selector' },
                { prop: 'label', type: 'ReactNode', default: 'undefined', description: 'Etiqueta con color verde permanente' },
                { prop: 'value', type: 'string | null', default: 'null', description: 'Fecha en formato DD-MM-YYYY' },
                { prop: 'onChange', type: '(date: string) => void', default: '-', description: 'Callback al cambiar de fecha' },
              ]}
            >
              <div className="w-full max-w-sm">
                <FormDateGreen
                  label="Fecha de Cierre (Verde)"
                  value={dateGreen}
                  onChange={(d) => setDateGreen(d)}
                  size="sm"
                  required
                />
                <p className="text-xs text-slate-500 mt-2">Valor actual: <strong className="text-slate-800">{dateGreen || 'Vacío'}</strong></p>
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 3. SECCIÓN: FORMULARIOS */}
        {activeTab === 'forms' && (
          <div className="space-y-8">
            <ComponentShowcase
              title="FormField & Inputs"
              description="Inputs de texto básicos con soporte para iconos, estados de error y textos de ayuda."
              importCode="import { FormField } from '@unisimon/ui';"
              exampleCode={`import { FormField } from '@unisimon/ui';
import { User } from 'lucide-react';

<FormField
  label="Nombre Completo"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  icon={<User size={18} />}
  required
/>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <FormField
                  label="Nombre de la Convocatoria"
                  value={inputText}
                  onChange={(e: any) => setInputText(e.target.value)}
                  placeholder="Ej: Convocatoria Interna 2026"
                  required
                />
                <FormField
                  label="Campo con Error"
                  value=""
                  onChange={() => {}}
                  placeholder="Obligatorio"
                  error
                  helperText="Este campo es obligatorio"
                  required
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="FormSelect"
              description="Selector desplegable institucional para opciones únicas."
              importCode="import { FormSelect } from '@unisimon/ui';"
              exampleCode={`import { FormSelect } from '@unisimon/ui';

<FormSelect
  label="Tipo de Convocatoria"
  value={tipo}
  onChange={(e) => setTipo(e.target.value)}
  options={[
    { value: '1', label: 'Interna Unisimon' },
    { value: '2', label: 'Externa Nacional' },
    { value: '3', label: 'Internacional' },
  ]}
  required
/>`}
            >
              <div className="w-full max-w-sm">
                <FormSelect
                  label="Tipo de Convocatoria"
                  value={selectVal}
                  onChange={(e: any) => setSelectVal(e.target.value)}
                  options={[
                    { value: '1', label: 'Interna Unisimon' },
                    { value: '2', label: 'Externa Nacional' },
                    { value: '3', label: 'Internacional' },
                  ]}
                  required
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="FormPhone"
              description="Input para números telefónicos con código de país integrado (mui-tel-input)."
              importCode="import { FormPhone } from '@unisimon/ui';"
              exampleCode={`import { FormPhone } from '@unisimon/ui';

<FormPhone
  label="Número de Contacto"
  value={phone}
  onChange={(val) => setPhone(val)}
  defaultCountry="co"
  required
/>`}
            >
              <div className="w-full max-w-sm">
                <FormPhone
                  label="Teléfono Institucional"
                  value={phoneVal}
                  onChange={(val: any) => setPhoneVal(val)}
                  defaultCountry="co"
                  required
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="FormSwitch & FormCheckbox"
              description="Controles de alternancia y casillas de selección."
              importCode="import { FormSwitch, FormCheckbox } from '@unisimon/ui';"
              exampleCode={`<FormSwitch
  label="Estado Activo"
  checked={activo}
  onChange={(e) => setActivo(e.target.checked)}
/>

<FormCheckbox
  label="Acepto los términos y condiciones"
  checked={acepto}
  onChange={(e) => setAcepto(e.target.checked)}
/>`}
            >
              <div className="flex flex-col gap-3">
                <FormSwitch
                  label="Estado del Sistema (Activo / Inactivo)"
                  checked={switchVal}
                  onChange={(e: any) => setSwitchVal(e.target.checked)}
                />
                <FormCheckbox
                  label="Requiere aprobación del comité ético"
                  checked={checkVal}
                  onChange={(e: any) => setCheckVal(e.target.checked)}
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="FormTags"
              description="Selector de etiquetas múltiples interactivo con chips."
              importCode="import { FormTags } from '@unisimon/ui';"
              exampleCode={`<FormTags
  label="Líneas de Investigación"
  value={tags}
  onChange={(newTags) => setTags(newTags)}
  placeholder="Escribe y presiona Enter..."
/>`}
            >
              <div className="w-full max-w-md">
                <FormTags
                  label="Líneas de Investigación"
                  value={tagsVal}
                  onChange={(newTags: any) => setTagsVal(newTags)}
                />
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 4. SECCIÓN: CARDS */}
        {activeTab === 'cards' && (
          <div className="space-y-8">
            <ComponentShowcase
              title="StatCard"
              description="Tarjetas métricas para paneles de control con indicadores de tendencia e iconos."
              importCode="import { StatCard } from '@unisimon/ui';"
              exampleCode={`import { StatCard } from '@unisimon/ui';
import { Users, FileText, CheckCircle } from 'lucide-react';

<StatCard
  title="Proyectos Activos"
  value="128"
  icon={<FileText size={24} />}
  change="+12% este mes"
  trend="up"
/>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <StatCard
                  title="Convocatorias Abiertas"
                  value="14"
                  icon={<FileText size={22} className="text-emerald-600" />}
                  change="+2 esta semana"
                  trend="up"
                />
                <StatCard
                  title="Investigadores Registrados"
                  value="1,420"
                  icon={<ShieldCheck size={22} className="text-blue-600" />}
                  change="98% activos"
                  trend="up"
                />
                <StatCard
                  title="Presupuesto Ejecutado"
                  value="$ 450M"
                  icon={<Zap size={22} className="text-amber-600" />}
                  change="-5% vs estimado"
                  trend="down"
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="Card (Contenedor Básico)"
              description="Contenedor con sombra suave y bordes redondeados institucionales."
              importCode="import { Card } from '@unisimon/ui';"
              exampleCode={`<Card title="Información General">
  <p className="text-sm text-slate-600">Contenido dentro de la tarjeta...</p>
</Card>`}
            >
              <div className="w-full">
                <Card title="Detalle de Convocatoria">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Esta es una tarjeta estándar del sistema de diseño. Puede contener formularios, tablas o cualquier contenido que requiera una agrupación visual limpia y sobria.
                  </p>
                </Card>
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 5. SECCIÓN: TABLAS */}
        {activeTab === 'tables' && (
          <div>
            <ComponentShowcase
              title="DataTable"
              description="Tabla institucional de alta potencia construida sobre @mui/x-data-grid, con paginación, filtros automáticos y localización en español."
              importCode="import { DataTable } from '@unisimon/ui';"
              exampleCode={`import { DataTable } from '@unisimon/ui';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'codigo', headerName: 'Código', width: 130 },
  { field: 'nombre', headerName: 'Nombre del Proyecto', flex: 1 },
  { field: 'estado', headerName: 'Estado', width: 120 },
];

const rows = [
  { id: 1, codigo: 'INV-2026-01', nombre: 'IA aplicada a la Medicina', estado: 'Activo' },
  { id: 2, codigo: 'INV-2026-02', nombre: 'Energías Renovables en Cúcuta', estado: 'Revisión' },
];

<DataTable columns={columns} rows={rows} autoHeight />`}
            >
              <div className="w-full h-72">
                <DataTable
                  columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    { field: 'codigo', headerName: 'Código', width: 120 },
                    { field: 'nombre', headerName: 'Título Convocatoria', flex: 1 },
                    { field: 'sede', headerName: 'Sede', width: 130 },
                    {
                      field: 'estado',
                      headerName: 'Estado',
                      width: 120,
                      renderCell: (params: any) => (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          {params.value}
                        </span>
                      ),
                    },
                  ]}
                  rows={[
                    { id: 1, codigo: 'CONV-001', nombre: 'Fondo de Apoyo a Semilleros 2026', sede: 'Cúcuta', estado: 'Abierta' },
                    { id: 2, codigo: 'CONV-002', nombre: 'Movilidad Internacional Docente', sede: 'Barranquilla', estado: 'Abierta' },
                    { id: 3, codigo: 'CONV-003', nombre: 'Publicación de Artículos Q1/Q2', sede: 'Ambas sedes', estado: 'Cerrada' },
                  ]}
                  pageSizeOptions={[5, 10]}
                />
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 6. SECCIÓN: HEADERS */}
        {activeTab === 'headers' && (
          <div className="space-y-8">
            <ComponentShowcase
              title="PageHeader"
              description="Encabezado de página institucional con título, subtítulo, botón de regreso y acciones derechas."
              importCode="import { PageHeader } from '@unisimon/ui';"
              exampleCode={`import { PageHeader, Button } from '@unisimon/ui';
import { Plus } from 'lucide-react';

<PageHeader
  title="Gestión de Convocatorias"
  subtitle="Administra y aprueba las convocatorias para el periodo actual"
  onBack={() => window.history.back()}
  rightActions={
    <Button variant="primary" icon={<Plus size={16} />}>
      Nueva Convocatoria
    </Button>
  }
/>`}
            >
              <div className="w-full bg-white p-4 rounded-xl border border-slate-200">
                <PageHeader
                  title="Convocatorias de Investigación"
                  subtitle="Periodo Académico 2026-II - Universidad Simón Bolívar"
                  rightActions={
                    <Button variant="primary" icon={<Plus size={16} />}>
                      Crear Convocatoria
                    </Button>
                  }
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="InfoHeader & InfoGrid"
              description="Encabezados de resumen y cuadrículas para fichas técnicas o detalles de registros."
              importCode="import { InfoHeader, InfoGrid } from '@unisimon/ui';"
              exampleCode={`<InfoHeader
  title="Proyecto INV-2026-88"
  badge="En Evaluación"
  badgeVariant="warning"
/>

<InfoGrid
  items={[
    { label: 'Investigador Principal', value: 'Dr. Carlos Mendoza' },
    { label: 'Facultad', value: 'Ingeniería de Sistemas' },
    { label: 'Presupuesto Solicitado', value: '$ 32,500,000 COP' },
  ]}
/>`}
            >
              <div className="w-full space-y-4">
                <InfoHeader
                  title="Proyecto INV-2026-88"
                  badge="En Evaluación"
                  badgeVariant="warning"
                />
                <InfoGrid
                  items={[
                    { label: 'Investigador Principal', value: 'Dr. Carlos Mendoza' },
                    { label: 'Facultad', value: 'Ingeniería de Sistemas' },
                    { label: 'Presupuesto Solicitado', value: '$ 32,500,000 COP' },
                    { label: 'Duración Estimada', value: '12 Meses' },
                  ]}
                />
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 7. SECCIÓN: MODALES */}
        {activeTab === 'modals' && (
          <div className="space-y-8">
            <ComponentShowcase
              title="Modal & FormModal"
              description="Ventanas modales estándar y modales especiales para formularios con botones de acción integrados."
              importCode="import { Modal, FormModal } from '@unisimon/ui';"
              exampleCode={`import { useState } from 'react';
import { Modal, Button } from '@unisimon/ui';

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Título del Modal"
>
  <p>Contenido del modal...</p>
</Modal>`}
            >
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Abrir Modal Básico
                </Button>
                <Button variant="primary" onClick={() => setIsFormModalOpen(true)}>
                  Abrir FormModal
                </Button>
              </div>

              {/* Modales Reales */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Modal de Información"
              >
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Este es un modal básico que sirve para mostrar avisos, advertencias o detalles de solo lectura.
                  </p>
                  <div className="flex justify-end pt-3">
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                      Entendido
                    </Button>
                  </div>
                </div>
              </Modal>

              <FormModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                title="Registrar Nuevo Participante"
                size="md"
                onSubmit={(e) => {
                  e.preventDefault();
                  Alert.success('¡Registro guardado con éxito!');
                  setIsFormModalOpen(false);
                }}
              >
                <div className="space-y-4">
                  <FormField label="Nombre Completo" placeholder="Ej: Juan Pérez" required />
                  <FormField label="Correo Institucional" placeholder="usuario@unisimon.edu.co" required />
                </div>
              </FormModal>
            </ComponentShowcase>
          </div>
        )}

        {/* 8. SECCIÓN: ALERTAS */}
        {activeTab === 'alerts' && (
          <div>
            <ComponentShowcase
              title="Alert (SweetAlert2 Estilizado)"
              description="Helper preconfigurado con el tema institucional para notificaciones modales y confirmaciones de eliminación."
              importCode="import { Alert } from '@unisimon/ui';"
              exampleCode={`import { Alert } from '@unisimon/ui';

// Alerta de éxito
Alert.success('Operación completada exitosamente');

// Alerta de error
Alert.error('No se pudo procesar la solicitud');

// Alerta de confirmación con callback
Alert.confirm({
  title: '¿Eliminar registro?',
  text: 'Esta acción no se puede deshacer',
  confirmText: 'Sí, eliminar',
  onConfirm: () => {
    // Código de eliminación
  }
});`}
            >
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="success"
                  onClick={() => Alert.success('¡Operación realizada con éxito!')}
                >
                  Alerta Success
                </Button>
                <Button
                  variant="danger"
                  onClick={() => Alert.error('Ocurrió un error al procesar el archivo.')}
                >
                  Alerta Error
                </Button>
                <Button
                  variant="warning"
                  onClick={() => Alert.warning('Por favor revisa los campos pendientes.')}
                >
                  Alerta Warning
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    Alert.confirm({
                      title: '¿Confirmar acción?',
                      text: '¿Estás seguro de que deseas aprobar esta postulación?',
                      confirmText: 'Sí, aprobar',
                      onConfirm: () => Alert.success('¡Aprobado con éxito!'),
                    })
                  }
                >
                  Confirmación con Pregunta
                </Button>
              </div>
            </ComponentShowcase>
          </div>
        )}

        {/* 9. SECCIÓN: ACTIVOS & ODS */}
        {activeTab === 'assets' && (
          <div className="space-y-8">
            <ComponentShowcase
              title="Logos Institucionales"
              description="Exportaciones oficiales de logos institucionales en formato verde institucional y blanco transparente."
              importCode="import { logoUnisimon, logoUnisimonBlanco } from '@unisimon/ui';"
              exampleCode={`import { logoUnisimon, logoUnisimonBlanco } from '@unisimon/ui';

// Logo Verde Estándar
<img src={logoUnisimon} alt="Unisimon" className="h-12 w-auto" />

// Logo Blanco (Para fondos oscuros o primarios)
<div className="bg-[#09843B] p-4 rounded-xl">
  <img src={logoUnisimonBlanco} alt="Unisimon Blanco" className="h-12 w-auto" />
</div>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Logo Verde */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center gap-3">
                  <img src={logoUnisimon} alt="Logo Verde" className="h-12 w-auto object-contain" />
                  <span className="text-xs font-mono text-slate-500">logoUnisimon (Verde Estándar)</span>
                </div>

                {/* Logo Blanco */}
                <div className="p-6 rounded-2xl bg-[#09843B] border border-emerald-800 flex flex-col items-center justify-center gap-3">
                  <img src={logoUnisimonBlanco} alt="Logo Blanco" className="h-12 w-auto object-contain" />
                  <span className="text-xs font-mono text-emerald-100">logoUnisimonBlanco (Fondo Oscuro)</span>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              title="Iconos de ODS (Objetivos de Desarrollo Sostenible)"
              description="Colección completa de los 17 iconos oficiales ODS exportados como imágenes y helper getOdsIcon()."
              importCode="import { ODS_ICONS, getOdsIcon } from '@unisimon/ui';"
              exampleCode={`import { getOdsIcon } from '@unisimon/ui';

// Obtener icono del ODS 4 (Educación de Calidad)
<img src={getOdsIcon(4)} alt="ODS 4" className="w-12 h-12 rounded-lg" />`}
            >
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-3 w-full">
                {Object.keys(ODS_ICONS).map((num) => (
                  <div key={num} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-100/60 border border-slate-200 hover:scale-105 transition-transform">
                    <img
                      src={(ODS_ICONS as any)[num]}
                      alt={`ODS ${num}`}
                      className="w-10 h-10 object-contain rounded-md shadow-sm"
                    />
                    <span className="text-[10px] font-bold text-slate-600">ODS {num}</span>
                  </div>
                ))}
              </div>
            </ComponentShowcase>
          </div>
        )}
      </main>
    </div>
  );
};
