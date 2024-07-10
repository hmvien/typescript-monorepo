import { fileURLToPath } from "node:url";
import { path, $ } from "zx";

export interface WorkspaceEntry {
  name: string;
  path: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const repoRootPath = path.resolve(path.join(__dirname, "..", ".."));

export async function getWorkspaces(): Promise<WorkspaceEntry[]> {
  const entries = JSON.parse(
    (await $`pnpm list -r --depth=-1 --json`).toString(),
  ) as WorkspaceEntry[];

  // Ignore the root workspace
  return entries.slice(1);
}
