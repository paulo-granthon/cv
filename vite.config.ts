import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
            strictPort: true,
        port: 5173,
    },
    resolve: {
        alias: {
            "./runtimeConfig": "./runtimeConfig.browser",
        },
    },
})

