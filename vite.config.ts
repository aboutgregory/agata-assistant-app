import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'; // Importamos o plugin de alto nível

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // O Tailwind é injetado como um plugin do Vite, eliminando o PostCSS.config.js
    tailwindcss(), 
  ],
  // Nenhuma seção 'css: { postcss: { ... } }' é necessária aqui.
});