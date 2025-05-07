/// <reference types="vitest"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend's address
        changeOrigin: true, // Allow cross-origin requests,
        secure: false, // Disable SSL verification
        rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix when forwarding
      },
      '/images': {
        target: 'http://localhost:3000', // Your backend's address
        changeOrigin: true, // Allow cross-origin requests,
        secure: false // Disable SSL verification
      }
    }
  },
  plugins: [svgr(), svgr({ include: '**/*.svg' }), react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.{test}.{ts,tsx}']
    }
  }
});
