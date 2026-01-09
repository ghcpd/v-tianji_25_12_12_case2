import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config to ensure plugin-react (ESM) loads correctly
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
