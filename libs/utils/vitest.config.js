import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getConfig } from "@monorepo/configs/vitest-base-config";
import { mergeConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default mergeConfig(getConfig(__dirname), {
  test: {
    coverage: {
      exclude: [],
    },
  },
});
