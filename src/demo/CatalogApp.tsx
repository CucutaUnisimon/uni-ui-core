import React, { useState } from 'react';
import {
  Sidebar,
  Header,
  Footer,
  Button,
  Card,
  StatCard,
  FormField,
  FormSelect,
  FormDate,
  FormDateGreen,
  FormCheckbox,
  FormSwitch,
  FormTags,
  FormPhone,
  DataTable,
  PageHeader,
  InfoHeader,
  InfoGrid,
  Modal,
  FormModal,
  Alert,
  logoUnisimon,
  logoUnisimonBlanco,
  ODS_ICONS,
  getOdsIcon,
} from '../index';
import { ComponentShowcase } from './components/ComponentShowcase';
import {
  Zap,
  Calendar,
  CheckSquare,
  Layers,
  Table as TableIcon,
  FileText,
  Square,
  AlertTriangle,
  Image as ImageIcon,
  Send,
  Plus,
  Trash2,
  ShieldCheck,
  FolderKanban,
  Sliders,
  HelpCircle,
} from 'lucide-react';

export const CatalogApp: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/buttons');

  // Estados interactivos para las pruebas de componentes
  const [dateClean, setDateClean] = useState<string | null>('2026-11-12');
  const [dateGreen, setDateGreen] = useState<string | null>('2026-11-12');
  const [inputText, setInputText] = useState('Texto de prueba');
  const [selectVal, setSelectVal] = useState('1');
  const [checkVal, setCheckVal] = useState(true);
  const [switchVal, setSwitchVal] = useState(true);
  const [tagsVal, setTagsVal] = useState(['Investigación', 'Innovación', 'Unisimon']);
  const [phoneVal, setPhoneVal] = useState('+57 300 123 4567');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  // Menú institucional idéntico al de las apps
  const menuItems = [
    {
      label: 'Componentes UI',
      path: '/ui',
      icon: FolderKanban,
      children: [
        { label: 'Botones (Button)', path: '/buttons', icon: Zap },
        { label: 'Fechas (FormDate)', path: '/dates', icon: Calendar },
        { label: 'Formularios & Inputs', path: '/forms', icon: CheckSquare },
        { label: 'Tarjetas (Cards & Stats)', path: '/cards', icon: Layers },
        { label: 'Tablas (DataTable)', path: '/tables', icon: TableIcon },
        { label: 'Headers & Títulos', path: '/headers', icon: FileText },
        { label: 'Modales (Modal & Form)', path: '/modals', icon: Square },
        { label: 'Alertas (SweetAlert2)', path: '/alerts', icon: AlertTriangle },
      ],
    },
    {
      label: 'Activos & Logos',
      path: '/assets',
      icon: ImageIcon,
    },
  ];

  const currentUser = {
    nombre: 'Desarrollador',
    apellido: 'Unisimon',
    username: 'dev.unisimon',
    email: 'desarrollo@unisimon.edu.co',
    rol: 'Frontend Lead',
    sede: 'Cúcuta',
    programa: 'Ingeniería de Sistemas',
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* 1. SIDEBAR INSTITUCIONAL OFICIAL */}
      <Sidebar
        menuItems={menuItems}
        currentPath={currentPath}
        onNavigate={(path) => setCurrentPath(path)}
        logoSrc={logoUnisimon}
        user={currentUser}
        onLogout={() => Alert.info('Sesión de demostración del Design System')}
      />

      {/* Contenedor Derecho (Header + Contenido con Scroll + Footer) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* 2. HEADER INSTITUCIONAL OFICIAL */}
        <Header
          portalTitle="Catálogo de Componentes"
          portalSubtitle="Design System Oficial • Universidad Simón Bolívar"
          user={currentUser}
          onLogout={() => Alert.info('Sesión de demostración del Design System')}
          notifications={[
            { id: 1, title: 'Nuevo Componente', message: 'FormDate y FormDateGreen disponibles', time: 'Hoy', read: false },
            { id: 2, title: 'Actualización @unisimon/ui', message: 'Botón con soporte de icono flexible', time: 'Ayer', read: true },
          ]}
        />

        {/* 3. ÁREA DE CONTENIDO CON SCROLL */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {/* Banner de Bienvenida Institucional */}
            <div className="mb-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-950 text-white shadow-premium relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30 mb-3">
                  @unisimon/ui Design System
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Librería de Componentes Unificada
                </h1>
                <p className="text-sm text-emerald-100/90 mt-2 leading-relaxed">
                  Esta interfaz utiliza exactamente el mismo <strong className="text-white">Sidebar</strong>, <strong className="text-white">Header</strong> y <strong className="text-white">Footer</strong> institucionales que tienen las aplicaciones de producción (Académico, Investigación, Presupuesto, etc.).
                </p>
              </div>
              <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none">
                <Layers size={220} />
              </div>
            </div>

            {/* SECCIÓN: BOTONES */}
            {currentPath === '/buttons' && (
              <ComponentShowcase
                title="Button"
                description="Botón estándar institucional con variantes visuales, tamaños, iconos y estado de carga."
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
                  { prop: 'loading', type: 'boolean', default: 'false', description: 'Muestra spinner y deshabilita el click' },
                  { prop: 'icon', type: 'ReactNode | LucideIcon', default: 'undefined', description: 'Icono a la izquierda o derecha' },
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
            )}

            {/* SECCIÓN: FECHAS */}
            {currentPath === '/dates' && (
              <div className="space-y-10">
                <ComponentShowcase
                  title="FormDate (Estándar y Limpio)"
                  description="Selector de fechas limpio y neutro que se integra con los bordes y temas estándar de la aplicación, sin forzar colores verdes permanentes."
                  importCode="import { FormDate } from '@unisimon/ui';"
                  exampleCode={`import { useState } from 'react';
import { FormDate } from '@unisimon/ui';

const [fecha, setFecha] = useState('2026-11-12');

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

const [fecha, setFecha] = useState('2026-11-12');

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

            {/* SECCIÓN: FORMULARIOS */}
            {currentPath === '/forms' && (
              <div className="space-y-8">
                <ComponentShowcase
                  title="FormField & Inputs"
                  description="Campos de entrada estándar con soporte para iconos, estados de error y ayudas."
                  importCode="import { FormField } from '@unisimon/ui';"
                  exampleCode={`<FormField
  label="Nombre del Proyecto"
  value={texto}
  onChange={(e) => setTexto(e.target.value)}
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
                  title="FormSelect & FormPhone"
                  description="Selectores desplegables e inputs telefónicos con prefijo de país."
                  importCode="import { FormSelect, FormPhone } from '@unisimon/ui';"
                  exampleCode={`<FormSelect
  label="Tipo de Convocatoria"
  value={selectVal}
  onChange={(e) => setSelectVal(e.target.value)}
  options={[
    { value: '1', label: 'Interna Unisimon' },
    { value: '2', label: 'Externa Nacional' },
  ]}
  required
/>`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                  title="FormSwitch, FormCheckbox & FormTags"
                  description="Switches de estado, checkboxes y selectores de etiquetas múltiples."
                  importCode="import { FormSwitch, FormCheckbox, FormTags } from '@unisimon/ui';"
                  exampleCode={`<FormSwitch label="Estado Activo" checked={activo} onChange={...} />
<FormCheckbox label="Acepto términos" checked={acepto} onChange={...} />
<FormTags label="Líneas" value={tags} onChange={...} />`}
                >
                  <div className="space-y-4 w-full">
                    <div className="flex flex-wrap gap-6 items-center">
                      <FormSwitch
                        label="Estado del Sistema"
                        checked={switchVal}
                        onChange={(e: any) => setSwitchVal(e.target.checked)}
                      />
                      <FormCheckbox
                        label="Requiere aval de decanatura"
                        checked={checkVal}
                        onChange={(e: any) => setCheckVal(e.target.checked)}
                      />
                    </div>
                    <FormTags
                      label="Líneas de Investigación"
                      value={tagsVal}
                      onChange={(newTags: any) => setTagsVal(newTags)}
                    />
                  </div>
                </ComponentShowcase>
              </div>
            )}

            {/* SECCIÓN: CARDS */}
            {currentPath === '/cards' && (
              <div className="space-y-8">
                <ComponentShowcase
                  title="StatCard"
                  description="Tarjetas para métricas institucionales con tendencias e iconos."
                  importCode="import { StatCard } from '@unisimon/ui';"
                  exampleCode={`<StatCard
  title="Proyectos Activos"
  value="128"
  icon={<FileText size={22} className="text-emerald-600" />}
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
                  title="Card Base"
                  description="Contenedor estándar con bordes suaves institucionales."
                  importCode="import { Card } from '@unisimon/ui';"
                  exampleCode={`<Card title="Detalle de Convocatoria">
  <p>Contenido...</p>
</Card>`}
                >
                  <div className="w-full">
                    <Card title="Detalle de Convocatoria">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Esta es una tarjeta estándar del sistema de diseño oficial de la Universidad Simón Bolívar.
                      </p>
                    </Card>
                  </div>
                </ComponentShowcase>
              </div>
            )}

            {/* SECCIÓN: TABLAS */}
            {currentPath === '/tables' && (
              <ComponentShowcase
                title="DataTable"
                description="Tabla de datos institucional con paginación, ordenamiento y localización en español."
                importCode="import { DataTable } from '@unisimon/ui';"
                exampleCode={`import { DataTable } from '@unisimon/ui';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'codigo', headerName: 'Código', width: 120 },
  { field: 'nombre', headerName: 'Nombre', flex: 1 },
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
            )}

            {/* SECCIÓN: HEADERS */}
            {currentPath === '/headers' && (
              <div className="space-y-8">
                <ComponentShowcase
                  title="PageHeader"
                  description="Cabecera estándar de vistas con título, descripción y botones de acción."
                  importCode="import { PageHeader } from '@unisimon/ui';"
                  exampleCode={`<PageHeader
  title="Convocatorias de Investigación"
  subtitle="Periodo 2026-II"
  rightActions={<Button variant="primary">Crear</Button>}
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
                  description="Módulos de información técnica para vistas de detalle."
                  importCode="import { InfoHeader, InfoGrid } from '@unisimon/ui';"
                  exampleCode={`<InfoHeader title="Proyecto INV-2026-88" badge="En Evaluación" />
<InfoGrid items={[{ label: 'Líder', value: 'Dr. Carlos Mendoza' }]} />`}
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

            {/* SECCIÓN: MODALES */}
            {currentPath === '/modals' && (
              <ComponentShowcase
                title="Modal & FormModal"
                description="Modales accesibles y animados con framer-motion."
                importCode="import { Modal, FormModal } from '@unisimon/ui';"
                exampleCode={`<Modal isOpen={open} onClose={() => setOpen(false)} title="Aviso">
  <p>Contenido...</p>
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

                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Modal de Información"
                >
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      Este es el modal base del sistema de diseño institucional.
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
            )}

            {/* SECCIÓN: ALERTAS */}
            {currentPath === '/alerts' && (
              <ComponentShowcase
                title="Alert (SweetAlert2 Estilizado)"
                description="Popups de alerta con el tema institucional de la Simón Bolívar."
                importCode="import { Alert } from '@unisimon/ui';"
                exampleCode={`Alert.success('Operación completada');
Alert.error('Ocurrió un error');
Alert.confirm({
  title: '¿Confirmar?',
  text: '¿Deseas continuar?',
  onConfirm: () => Alert.success('Aprobado')
});`}
              >
                <div className="flex flex-wrap gap-3">
                  <Button variant="success" onClick={() => Alert.success('¡Operación realizada con éxito!')}>
                    Alerta Success
                  </Button>
                  <Button variant="danger" onClick={() => Alert.error('Ocurrió un error al procesar el archivo.')}>
                    Alerta Error
                  </Button>
                  <Button variant="warning" onClick={() => Alert.warning('Revisa los campos pendientes.')}>
                    Alerta Warning
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      Alert.confirm({
                        title: '¿Confirmar postulación?',
                        text: '¿Estás seguro de enviar la solicitud a revisión?',
                        confirmText: 'Sí, enviar',
                        onConfirm: () => Alert.success('¡Enviado con éxito!'),
                      })
                    }
                  >
                    Confirmación con Pregunta
                  </Button>
                </div>
              </ComponentShowcase>
            )}

            {/* SECCIÓN: ACTIVOS & ODS */}
            {currentPath === '/assets' && (
              <div className="space-y-8">
                <ComponentShowcase
                  title="Logos Institucionales"
                  description="Exportaciones oficiales de logos institucionales (Verde institucional y Blanco para fondos oscuros)."
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
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center gap-3">
                      <img src={logoUnisimon} alt="Logo Verde" className="h-12 w-auto object-contain" />
                      <span className="text-xs font-mono text-slate-500">logoUnisimon (Verde Estándar)</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#09843B] border border-emerald-800 flex flex-col items-center justify-center gap-3">
                      <img src={logoUnisimonBlanco} alt="Logo Blanco" className="h-12 w-auto object-contain" />
                      <span className="text-xs font-mono text-emerald-100">logoUnisimonBlanco (Fondo Oscuro)</span>
                    </div>
                  </div>
                </ComponentShowcase>

                <ComponentShowcase
                  title="Iconos de ODS (Objetivos de Desarrollo Sostenible)"
                  description="Colección completa de los 17 iconos oficiales ODS con su helper getOdsIcon()."
                  importCode="import { ODS_ICONS, getOdsIcon } from '@unisimon/ui';"
                  exampleCode={`import { getOdsIcon } from '@unisimon/ui';

<img src={getOdsIcon(4)} alt="ODS 4" className="w-12 h-12" />`}
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
          </div>
        </main>

        {/* 4. FOOTER INSTITUCIONAL OFICIAL */}
        <Footer version="1.1.5" />
      </div>
    </div>
  );
};
