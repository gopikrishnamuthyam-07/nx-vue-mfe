// / <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/shell-app',

  server: {
    port: 4100,
    host: 'localhost',
  },

  preview: {
    port: 4100,
    host: 'localhost',
  },

  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'shell',
      remotes: {
        "products": "http://localhost:4201/assets/remoteEntry.js",
        // products: './Products.vue',
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
