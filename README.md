# dotfiles

## Installation

### mise

https://mise.jdx.dev/getting-started.html

```sh
curl -fsSL https://mise.run | sh
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

### Cargo

https://doc.rust-lang.org/cargo/getting-started/installation.html

```sh
curl -fsSL  https://sh.rustup.rs | sh -s -- -y
```

#### Cargo packages

```sh
# https://github.com/lsd-rs/lsd
cargo install lsd

# https://github.com/sharkdp/bat
cargo install bat

# https://github.com/dandavison/delta
cargo install git-delta

# https://github.com/BurntSushi/ripgrep
cargo install ripgrep

# https://github.com/sharkdp/fd
cargo install fd-find

# https://github.com/dalance/procs
cargo install procs

# https://github.com/bootandy/dust
cargo install du-dust

# https://github.com/ajeetdsouza/zoxide
cargo install zoxide

# https://github.com/ducaale/xh
cargo install xh

# https://github.com/bvaisvil/zenith
cargo install --git https://github.com/bvaisvil/zenith.git
cargo install --features nvidia --git https://github.com/bvaisvil/zenith.git # for NVIDIA GPU support

# https://github.com/extrawurst/gitui
cargo install gitui

# https://github.com/zellij-org/zellij
cargo install zellij
```

### Rye

https://rye-up.com/guide/installation/

```sh
curl -fsSL https://rye-up.com/get | bash

# Enable uv support
rye config --set-bool behavior.use-uv=true
```

### Wasmtime

https://wasmtime.dev/

```sh
curl -fsSL https://wasmtime.dev/install.sh | bash
```

## Usage

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

### Zsh + Prezto + Powerlevel10k

```sh
ln -sfn /path/to/dotfiles/.zfunc ~/.zfunc

# Prezto
git clone --recursive --depth 1 https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

ln -sf /path/to/dotfiles/.zprezto/runcoms/zlogin ~/.zlogin
ln -sf /path/to/dotfiles/.zprezto/runcoms/zlogout ~/.zlogout
ln -sf /path/to/dotfiles/.zprezto/runcoms/zpreztorc ~/.zpreztorc
ln -sf /path/to/dotfiles/.zprezto/runcoms/zprofile ~/.zprofile
ln -sf /path/to/dotfiles/.zprezto/runcoms/zshenv ~/.zshenv
ln -sf /path/to/dotfiles/.zprezto/runcoms/zshrc ~/.zshrc

# Powerlevel10k
ln -sf /path/to/dotfiles/.p10k.zsh ~/.p10k.zsh
```

### fzf

```sh
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

### Git

```sh
ln -sf /path/to/dotfiles/.gitconfig ~/.gitconfig
```

### Zellij

```sh
ln -sfn /path/to/dotfiles/.config/zellij ~/.config/zellij
```
