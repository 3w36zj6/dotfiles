import { $ } from "https://deno.land/x/dax@0.39.1/mod.ts";
import { confirm } from "npm:@inquirer/prompts@4.3.2";
import pc from "npm:picocolors@1.0.0";

const errorText = `${pc.bold(pc.red("error"))}:`;

// Check requirement commands
const requirementCommands = ["node", "bun"];
for (const requirementCommand of requirementCommands) {
  try {
    await $`which ${requirementCommand}`.quiet();
  } catch (_e) {
    console.error(
      errorText,
      `${requirementCommand} command is not found. Please install it.`,
    );
    Deno.exit(1);
  }
}

const isAllYes = Deno.args.length > 0 &&
  (Deno.args[0] === "-y" || Deno.args[0] === "--yes");

const isNodePackagesInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Node.js packages?",
  }));

const packageNames = [
  "@antfu/ni",
];

if (isNodePackagesInstallationConfirmed) {
  for (const packageName of packageNames) {
    try {
      await $`bun install -g ${packageName}`;
    } catch (_e) {
      console.error(
        errorText,
        `Failed to install ${packageName}.`,
      );
    }
  }
}
