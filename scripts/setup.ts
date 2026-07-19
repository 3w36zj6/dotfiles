import { $ } from "https://deno.land/x/dax@0.39.1/mod.ts";
import { confirm, input } from "npm:@inquirer/prompts@4.3.2";
import pc from "npm:picocolors@1.0.0";

const errorText = `${pc.bold(pc.red("error"))}:`;
// const successText = `${pc.bold(pc.green("success"))}:`;

// Check requirement commands
const requirementCommands = [
  "curl",
  "git",
  "unzip", // for Deno
];
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

const isDirectoryExists = async (path: string): Promise<boolean> => {
  try {
    const fileInfo = await Deno.stat(path);
    return fileInfo.isDirectory;
  } catch (_e) {
    return false;
  }
};

const isAllYes = Deno.args.length > 0 &&
  (Deno.args[0] === "-y" || Deno.args[0] === "--yes");

const homeDirectoryPath = await input({
  message: "Please input your home directory path",
  default: Deno.env.get("HOME"),
});

const gitRootPath = await input({
  message: "Please input your dotfiles repository path",
  default: await $`git rev-parse --show-toplevel`.text(),
});

// Bash
const isBashSetUpConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to set up for bash?",
  }));

if (isBashSetUpConfirmed) {
  await $`ln -sf ${gitRootPath}/.bashrc ${homeDirectoryPath}/.bashrc`;
  if (await isDirectoryExists("/usr/share/bash-completion")) {
    await Deno.remove("/usr/share/bash-completion", { recursive: true });
  }
  await $`git clone --depth 1 https://github.com/scop/bash-completion.git /usr/share/bash-completion`;
}

// Nix
const isNixInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Nix?",
  }));

if (isNixInstallationConfirmed) {
  // NOTE: Single-user installation
  await $`curl -fsSL https://nixos.org/nix/install | sh -s -- --no-daemon`;
}

// Reset dotfiles repository to latest commit on main branch
const isDotfilesRepositoryResetConfirmed = isAllYes ||
  (await confirm({
    message:
      "Do you want to reset dotfiles repository to latest commit on main branch?",
  }));

if (isDotfilesRepositoryResetConfirmed) {
  await $`git reset --hard origin/main`;
}
