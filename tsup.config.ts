import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react", "react-dom"],
});