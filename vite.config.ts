/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tsconfigPaths()];
  return plugins;
}

export default defineConfig({
  base: "./", // 配置相对路径而不是绝对路径
  // base: "/github-actions-demo/", // 配置基础路径为仓库名
  plugins: getPlugins(),
  build: {
    outDir: "docs",
  },
});
