import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': 'http://server:3000',
      '/api': 'http://server:3000'
    }
  }
});
