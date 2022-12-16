import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ skipDiagnostics: true })],

  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue-vault",
      fileName: (format) => `vue-vault.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
});
