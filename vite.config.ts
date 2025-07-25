import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),
    react()],
    resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // substitui __dirname
    },
  },
})
