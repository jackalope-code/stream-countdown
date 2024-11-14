import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "stream-countdown",
  plugins: [react()],
  build: {
    outDir: './build',
    emptyOutDir: true
  }
})