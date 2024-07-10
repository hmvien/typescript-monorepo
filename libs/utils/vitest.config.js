import { getConfig } from "@monorepo/configs/vitest-base-config";
import { mergeConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default mergeConfig(getConfig(__dirname), {
  test: {
    coverage: {
      exclude: [],
    },
  },
});
