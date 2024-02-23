import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-website-react-migration",
  plugins: [react()],
  build: {
    emptyOutDir: true,
    assetsDir: '.', 
  }
})
