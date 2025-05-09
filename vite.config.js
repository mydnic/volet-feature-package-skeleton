import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes('skeleton'),
                }
            }
        }),
        tailwindcss()
    ],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'resources/js/skeleton.js'),
            name: 'Skeleton',
            fileName: () => `skeleton.js`,
            formats: ['iife'],
        },
        outDir: 'resources/dist',
    }
});
