import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/VueWeather/', // Add your repository name here
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
