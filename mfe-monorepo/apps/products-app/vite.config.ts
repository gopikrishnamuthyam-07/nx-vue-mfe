/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/products-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        'ProductsApp': "./src/app/ProductsApp.vue"

      },
      shared: ['vue'],
    }),
  ],
  build: {
    // minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 }
  // base: 'http://localhost:4200',
});
