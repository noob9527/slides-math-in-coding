import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // https://vitejs.dev/guide/static-deploy#github-pages
  base: '/slides-math-in-coding/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.md']
});
