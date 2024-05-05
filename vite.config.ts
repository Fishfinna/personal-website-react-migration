import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "other-dependencies"],
  },
  build: {
    emptyOutDir: true,
    assetsDir: ".",
  },
  server: {
    host: process.env.VITE_HOST as string,
    port: parseInt(process.env.VITE_PORT),
  },
});
