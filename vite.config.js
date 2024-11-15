import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/RealEstate/',  // replace 'RealEstate' with your actual repository name
  plugins: [react()],
});

