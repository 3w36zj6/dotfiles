import { $ } from "https://deno.land/x/dax@0.39.1/mod.ts"
import { confirm } from "npm:@inquirer/prompts@4.3.2"
import pc from "npm:picocolors@1.0.0"

const errorText = `${pc.bold(pc.red("error"))}:`;

// Check requirement commands
const requirementCommands = ["cargo"];
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

const isCargoPackagesInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Cargo packages?",
  }));

const packageNames = [
  "lsd",
  "bat",
  "git-delta",
  "ripgrep",
  "fd-find",
  "procs",
  "du-dust",
  "zoxide",
  "xh",
  "--git=https://github.com/bvaisvil/zenith.git",
  "gitui",
  "zellij",
];

if (isCargoPackagesInstallationConfirmed) {
  for (const packageName of packageNames) {
    await $`cargo install ${packageName}`;
  }
}
