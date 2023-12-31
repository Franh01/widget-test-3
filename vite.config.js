import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3001, // This is the port which we will use in docker
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  // build: {
  //   lib: {
  //     entry: "src/main.jsx",
  //     name: "widget",
  //   },
  //   rollupOptions: {},
  // },
  // define: {
  //   "process.env.NODE_ENV": JSON.stringify("production"),
  //   "process.isNode": "false",
  // },
});
