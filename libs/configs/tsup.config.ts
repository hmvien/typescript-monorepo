import type { Options } from "tsup";

export const config: Options = {
  entry: ["src/**/*.ts", "!src/**/__tests__/**", "!src/**/*.test.*"],
  outDir: "dist",
  sourcemap: true,
  format: ["esm"],
  tsconfig: "tsconfig.build.json",
  esbuildOptions(options) {
    // Set `sourceRoot` to  "/" to strip the build path prefix from
    // generated source code references. This will improve issue grouping in Sentry.
    options.sourceRoot = "/";
  },
};
