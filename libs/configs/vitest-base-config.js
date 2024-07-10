import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

/**
 * @typedef {import('vite').UserConfig} UserConfig
 */

/**
 *
 * @param {string} workspaceRoot
 * @returns {UserConfig}
 */
export function getConfig(workspaceRoot) {
  return defineConfig({
    plugins: [
      tsconfigPaths({
        root: workspaceRoot,
      }),
    ],
    test: {
      globals: true,
      include: ["src/**/*.test.ts"],
      coverage: {
        all: true,
        provider: "v8",
        exclude: [
          "watch.ts",
          "env.ts",
          // Generally want to ignore the main file and scripts since we can't automate those
          "src/main.ts",
          "src/env.ts",
          "src/scripts/**/*.ts",
          "fixtures/**/*.ts",
        ],
        reporter: ["text", "json", "html"],
      },
    },
  });
}
