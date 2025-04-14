import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow access from outside container
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // needed for Docker + volume syncing
    },
  },
});
