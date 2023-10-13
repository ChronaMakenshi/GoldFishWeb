import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/votre-route-api': 'http://localhost:3000',
        },
    },
    plugins: [Vue()],
});

