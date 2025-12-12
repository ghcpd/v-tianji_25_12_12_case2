import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.{ts,tsx,js,jsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setupTests.ts'],
    exclude: ['tests/e2e/**'],
    coverage: {
      reporter: ['text', 'lcov'],
      provider: 'v8'
    }
  },
})
