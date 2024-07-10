import { path, $ } from "zx";
import { getWorkspaces, repoRootPath } from "./utils/workspaces";

const CONFIG_NAMES = [".lintstagedrc.json"];

/**
 * A lot of Node tools such as prettier and lint-staged require their config file to exist
 * in the workspace directory to work. This creates a lot of code-duplication. This script
 * will go through all of our packages and create a symlink to their configs on the root level
 * of this repo.
 */
async function main() {
  const workspaces = await getWorkspaces();

  for (const configName of CONFIG_NAMES) {
    const pathToConfig = path.join(repoRootPath, configName);

    for (const workspace of workspaces) {
      const relativePathToConfigFromWorkspace = path.relative(
        workspace.path,
        pathToConfig,
      );
      await $`cd ${workspace.path} && ln -sfn ${relativePathToConfigFromWorkspace} ${configName}`;
    }
  }
}

await main();
