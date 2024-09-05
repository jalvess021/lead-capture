import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        proxy: {
            '/api': 'http://127.0.0.1:8282', // Ajuste o URL conforme necessário
        },
    },
});
