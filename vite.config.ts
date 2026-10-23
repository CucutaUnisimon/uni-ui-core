import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UniUi',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        '@mui/material/styles',
        '@mui/icons-material',
        '@mui/x-data-grid',
        '@mui/x-data-grid/locales',
        '@mui/x-date-pickers',
        '@mui/x-date-pickers/DatePicker',
        '@mui/x-date-pickers/LocalizationProvider',
        '@emotion/react',
        '@emotion/styled',
        'framer-motion',
        'lucide-react',
        'dayjs',
        'dayjs/plugin/customParseFormat',
        'mui-tel-input'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          'framer-motion': 'FramerMotion',
          'lucide-react': 'LucideReact',
        },
      },
    },
  },
});
