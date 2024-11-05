# dotfiles

## Install automatically

```sh
git clone git@github.com:3w36zj6/dotfiles.git
cd dotfiles

# If you use x86_64-unknown-linux-gnu
wget https://3w36zj6.github.io/dotfiles/setup_x86_64-unknown-linux-gnu
chmod +x setup_x86_64-unknown-linux-gnu
./setup_x86_64-unknown-linux-gnu

# If you use aarch64-apple-darwin
wget https://3w36zj6.github.io/dotfiles/setup_aarch64-apple-darwin
chmod +x setup_aarch64-apple-darwin
./setup_aarch64-apple-darwin

# Restart shell
```

## Install manually

### Aliases

```sh
ln -sf /path/to/dotfiles/.shell_aliases ~/.shell_aliases
```

### Environment variables

```sh
ln -sf /path/to/dotfiles/.shell_envs ~/.shell_envs
```

### Bash + bash-completion

```sh
ln -sf /path/to/dotfiles/.bashrc ~/.bashrc

# bash-completion
git clone --depth 1 https://github.com/scop/bash-completion.git /usr/share/bash-completion
```

### Zsh + Sheldon + Powerlevel10k

```sh
ln -sf /path/to/dotfiles/.zshrc ~/.zshrc
ln -sf /path/to/dotfiles/.zshenv ~/.zshenv
ln -sfn /path/to/dotfiles/.zfunc ~/.zfunc

# Sheldon
curl --proto "=https" -fLsS https://rossmacarthur.github.io/install/crate.sh | bash -s -- --repo rossmacarthur/sheldon --to ~/.local/bin --force
ln -sfn /path/to/dotfiles/.config/sheldon ~/.config/sheldon
sheldon lock

# Powerlevel10k
ln -sf /path/to/dotfiles/.p10k.zsh ~/.p10k.zsh
```

### Nix

https://nix.dev/manual/nix/latest/installation/installing-binary

```sh
curl -fsSL https://nixos.org/nix/install | sh -s -- --no-daemon
```

### mise

https://mise.jdx.dev/getting-started.html

```sh
curl -fsSL https://mise.run | sh

ln -sfn /path/to/dotfiles/.config/mise ~/.config/mise

# List of mise tools
node --version  # lts
```

### Deno

https://docs.deno.com/runtime/manual/getting_started/installation

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Bun

https://bun.sh/docs/installation

```sh
curl -fsSL https://bun.sh/install | bash
```

#### Node.js packages

> [!NOTE]
> Global Node.js packages are managed with Bun, but Node.js is required to run them.

```sh
# https://github.com/antfu-collective/ni
bun install -g @antfu/ni
```

### Cargo

https://doc.rust-lang.org/cargo/getting-started/installation.html

```sh
curl -fsSL  https://sh.rustup.rs | sh -s -- -y
```

#### Rust packages

> [!NOTE]
> [`cargo-binstall`](https://github.com/cargo-bins/cargo-binstall) is required.

```sh
# https://github.com/lsd-rs/lsd
cargo-binstall lsd

# https://github.com/sharkdp/bat
cargo-binstall bat

# https://github.com/dandavison/delta
cargo-binstall git-delta

# https://github.com/BurntSushi/ripgrep
cargo-binstall ripgrep

# https://github.com/sharkdp/fd
cargo-binstall fd-find

# https://github.com/dalance/procs
cargo-binstall procs

# https://github.com/bootandy/dust
cargo-binstall du-dust

# https://github.com/ajeetdsouza/zoxide
cargo-binstall zoxide

# https://github.com/ducaale/xh
cargo-binstall xh

# https://github.com/bvaisvil/zenith
cargo-binstall --git https://github.com/bvaisvil/zenith.git
cargo-binstall --features nvidia --git https://github.com/bvaisvil/zenith.git # for NVIDIA GPU support

# https://github.com/extrawurst/gitui
cargo-binstall gitui

# https://github.com/zellij-org/zellij
cargo-binstall zellij
```

### Rye

https://rye-up.com/guide/installation/

```sh
curl -fsSL https://rye-up.com/get | bash

# Enable uv support
rye config --set-bool behavior.use-uv=true
```

### fzf

```sh
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

### Git config

```sh
ln -sf /path/to/dotfiles/.gitconfig ~/.gitconfig
```

### Zellij

```sh
ln -sfn /path/to/dotfiles/.config/zellij ~/.config/zellij
```
