import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Site multi-página: cada .html da raiz é um ponto de entrada.
// O React só é carregado nas páginas que importam src/react/*.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        activities: resolve(__dirname, 'activities.html'),
        activity: resolve(__dirname, 'activity.html'),
        competencies: resolve(__dirname, 'competencies.html'),
        submit: resolve(__dirname, 'submit.html'),
      },
    },
  },
});
