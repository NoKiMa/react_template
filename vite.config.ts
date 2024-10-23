import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Ensures we have a DOM-like environment for React components
    setupFiles: './src/setupTests.ts', // Optional: path to setup file for global configs
    coverage: {
      reporter: ['text', 'json', 'html'], // Generates different types of coverage reports
    },
    include: ['src/**/*.test.{ts,tsx}'], // Tells Vitest to look for `.test.ts` or `.test.tsx` files
  },
})
