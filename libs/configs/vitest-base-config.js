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
        reporter: ["text", "json", "html"],
      },
    },
  });
}
