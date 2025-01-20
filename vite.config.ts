import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name].[hash].[ext]", // Opcjonalnie, dla wersjonowania plików
        chunkFileNames: "[name].[hash].js", // Opcjonalnie, dla wersjonowania plików
      },
    },
  },
});
