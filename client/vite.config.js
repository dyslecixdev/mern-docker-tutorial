import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Changes the port where the client is run from 5173 to 3000
  server: {
    host: true,
    port: 3000,
  },
});

