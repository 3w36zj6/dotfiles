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

// If `~/.config` does not exist, create it.
if (!(await isDirectoryExists(`${homeDirectoryPath}/.config`))) {
  await Deno.mkdir(`${homeDirectoryPath}/.config`);
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
  await $`ln -sfn ${gitRootPath}/.config/sheldon ${homeDirectoryPath}/.config/sheldon`;
  await $`sheldon lock`;

  await $`ln -sf ${gitRootPath}/.p10k.zsh ${homeDirectoryPath}/.p10k.zsh`;
}

// Shell aliases
const isAliasesInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for shell aliases?",
  }));

if (isAliasesInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.shell_aliases ${homeDirectoryPath}/.shell_aliases`;
}

// Shell envs
const isEnvsInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to create symbolic link for shell envs?",
  }));

if (isEnvsInstallationConfirmed) {
  await $`ln -sf ${gitRootPath}/.shell_envs ${homeDirectoryPath}/.shell_envs`;
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
  await $`ln -sfn ${gitRootPath}/.config/mise ${homeDirectoryPath}/.config/mise`;
}

// Deno
const isDenoInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Deno?",
  }));

if (isDenoInstallationConfirmed) {
  await executeInstallScript("https://deno.land/x/install/install.sh");
}

// Bun
const isBunInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Bun?",
  }));

if (isBunInstallationConfirmed) {
  await executeInstallScript("https://bun.sh/install");
}

// Cargo
const isCargoInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Cargo?",
  }));

if (isCargoInstallationConfirmed) {
  // NOTE: rustup: Unable to run interactively. Run with -y to accept defaults, --help for additional options
  await $`curl -fsSL https://sh.rustup.rs | bash -s -- -y`;
}

// Rye
const isRyeInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Rye?",
  }));

if (isRyeInstallationConfirmed) {
  await executeInstallScript("https://rye-up.com/get");
}

// Wasmtime
const isWasmtimeInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install Wasmtime?",
  }));

if (isWasmtimeInstallationConfirmed) {
  await executeInstallScript("https://wasmtime.dev/install.sh");
}

// fzf
const isFzfInstallationConfirmed = isAllYes ||
  (await confirm({
    message: "Do you want to install fzf?",
  }));

if (isFzfInstallationConfirmed) {
  if (await isDirectoryExists(`${homeDirectoryPath}/.fzf`)) {
    await Deno.remove(`${homeDirectoryPath}/.fzf`, { recursive: true });
  }
  await $`git clone --depth 1 https://github.com/junegunn/fzf.git ${homeDirectoryPath}/.fzf`;
  await $`${homeDirectoryPath}/.fzf/install`;
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
