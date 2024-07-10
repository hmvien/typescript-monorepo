/**
 * @typedef {import('tsup').Options} Options
 */

/**
 * @type {Options}
 */
export const config = {
  entry: ["src/**/*.ts", "!src/**/__tests__/**", "!src/**/*.test.*"],
  outDir: "dist",
  sourcemap: true,
  format: ["esm"],
  tsconfig: "tsconfig.build.json",
};
