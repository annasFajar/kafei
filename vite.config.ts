import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(),'');

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: true,
      port: parseInt(env.VITE_PORT),
      allowedHosts: [
        '3d84-110-137-83-103.ngrok-free.app'
      ],
      cors: true,
      // open: true,
      strictPort: true,
      proxy: { // CORS API bermasalah jadi menggunakan ini
        "/api": {
        target: "https://wpu-cafe.vercel.app", // API publik
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
        }
      }
    }
  }
})