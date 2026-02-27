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
  "xz", // for Wasmtime
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

const executeInstallScript = async (url: string) => {
  await $`curl -fsSL ${url} | bash`;
};

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

// `.config` directory
const isConfigInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to symlink the `.config` directory?",
  }));

if (isConfigInstallationConfirmed) {
  await $`ln -sfn ${gitRootPath}/.config ${homeDirectoryPath}/.config`;
}

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

// Zsh
const isZshSetUpConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to set up for zsh?",
  }));

if (isZshSetUpConfirmed) {
  await $`ln -sf ${gitRootPath}/.zshrc ${homeDirectoryPath}/.zshrc`;
  await $`ln -sf ${gitRootPath}/.zshenv ${homeDirectoryPath}/.zshenv`;
  await $`ln -sfn ${gitRootPath}/.zfunc ${homeDirectoryPath}/.zfunc`;

  await $`curl --proto "=https" -fLsS https://rossmacarthur.github.io/install/crate.sh | bash -s -- --repo rossmacarthur/sheldon --to ${homeDirectoryPath}/.local/bin --force`;
  await $`sheldon lock`;

  await $`ln -sf ${gitRootPath}/.p10k.zsh ${homeDirectoryPath}/.p10k.zsh`;
}

// Shell aliases
const isAliasesInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for shell aliases?",
  }));

if (isAliasesInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.aliases.sh ${homeDirectoryPath}/.aliases.sh`;
}

// Shell envs
const isEnvsInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for shell envs?",
  }));

if (isEnvsInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.envs.sh ${homeDirectoryPath}/.envs.sh`;
}

// Interactive tools
const isInteractiveToolsInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for shell interactive tools?",
  }));

if (isInteractiveToolsInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.interactive_tools.sh ${homeDirectoryPath}/.interactive_tools.sh`;
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

// mise
const isMiseInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install mise?",
  }));

if (isMiseInstallationConfirmed) {
  await executeInstallScript("https://mise.run");
  await $`mise install`;
}

// Git config
const isGitConfigInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for Git config?",
  }));

if (isGitConfigInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.gitconfig ${homeDirectoryPath}/.gitconfig`;
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
