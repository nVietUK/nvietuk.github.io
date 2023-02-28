import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { watch: { usePolling: true } },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
