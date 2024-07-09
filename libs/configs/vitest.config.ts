import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function getConfig(workspaceRoot: string) {
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
