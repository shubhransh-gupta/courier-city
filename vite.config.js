import { defineConfig } from 'vite';

export default defineConfig({
  base: '/courier-city/',
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
