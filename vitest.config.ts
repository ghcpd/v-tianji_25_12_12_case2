import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['e2e/**'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
})
