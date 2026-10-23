# @unisimon/ui — Sistema de Diseño y UI Institucional

Librería centralizada de componentes, tokens de diseño y temas visuales para las aplicaciones frontend de la **Universidad Simón Bolívar**.

---

## 🚀 Instalación en Proyectos Frontend

Como cada proyecto es un repositorio independiente, se instala directamente desde la URL del repositorio Git institucional:

```bash
npm install git+https://github.com/CucutaUnisimon/uni-ui-core.git#v1.0.0
```

> **Tip:** Al actualizar la librería, solo debes cambiar la etiqueta (ej. `#v1.0.1`) en el `package.json` y ejecutar `npm install`.

---

## 🎨 Configuración en la Aplicación

### 1. Configurar Tailwind CSS
En el archivo `tailwind.config.js` del proyecto, importa el preset institucional:

```javascript
/** @type {import('tailwindcss').Config} */
import uniPreset from '@unisimon/ui/preset';

export default {
  presets: [uniPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@unisimon/ui/dist/**/*.{js,mjs}"
  ],
  plugins: [],
}
```

### 2. Importar Estilos Globales y Tema MUI
En tu archivo de entrada principal (`src/main.tsx` o `src/App.tsx`):

```tsx
import '@unisimon/ui/styles.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@unisimon/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Resto de tu app */}
    </ThemeProvider>
  );
}
```

---

## 🧩 Componentes Disponibles

### Componentes de UI
* **Tablas y Listados:** `DataTable`, `PageHeader`, `InfoHeader`, `InfoGrid`, `SelectionListItem`
* **Botones y Tarjetas:** `Button`, `Card`, `StatCard`, `ModuleCard`
* **Modales y Visores:** `FormModal`, `Modal`, `PdfModal` (visor desacoplable con zoom/descarga), `ImageModal`
* **Formularios e Inputs:** `FormField`, `FormSelect`, `FormSelectAutocomplete`, `FormAutocomplete`, `FormCheckbox`, `FormDate`, `FormPhone`, `PhoneCell`, `FormSwitch`, `FormTags`, `FormTextArea`, `FormSection`
* **Subida de Archivos:** `FileUpload`, `FileImgUpload`
* **Feedback y Carga:** `LoadingOverlay`, `LoadingSpinner`, `HasPermission`

### Componentes de Layout
* `Header`: Barra superior institucional con título configurable, avatar de usuario y dropdown de notificaciones.
* `Sidebar`: Menú lateral desplegable con soporte para búsqueda, submenús y diseño colapsable.
* `Loader` / `SkeletonLoader`: Animaciones de carga institucionales con el logo de la universidad.
* `Footer`: Pie de página institucional estándar.

---

## 🛠️ Cómo compilar y publicar una nueva versión

1. Realiza los cambios necesarios en `uni-ui-core`.
2. Compila el paquete:
   ```bash
   npm run build
   ```
3. Haz commit y crea la etiqueta de versión en Git:
   ```bash
   git add .
   git commit -m "feat: mejoras en DataTable y PdfModal"
   git tag v1.0.1
   git push origin main --tags
   ```
