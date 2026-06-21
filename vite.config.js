import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    open: true,
  },
})
