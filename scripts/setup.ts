import { $ } from "https://deno.land/x/dax@0.39.1/mod.ts";
import { confirm, input } from "npm:@inquirer/prompts@4.3.2";

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
