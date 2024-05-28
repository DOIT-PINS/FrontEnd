import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  erver: {
    port: 5173,
    host: "0.0.0.0",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/vars/_color.scss";'
      }
    }
  }
})
