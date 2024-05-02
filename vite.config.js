import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  erver: {
    port: 5173,
    host: "0.0.0.0",
  },
  plugins: [vue()],
})
