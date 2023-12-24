# dotfiles

## Installation

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

# https://github.com/zellij-org/zellij
cargo install zellij
```

### Rye

https://rye-up.com/guide/installation/

```sh
curl -fsSL https://rye-up.com/get | bash
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
git clone https://github.com/scop/bash-completion.git /usr/share/bash-completion
```

### Zsh + Prezto + Powerlevel10k

```sh
ln -sfn /path/to/dotfiles/.zfunc ~/.zfunc

# Prezto
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

ln -sf /path/to/dotfiles/.zprezto/runcoms/zlogin ~/.zlogin
ln -sf /path/to/dotfiles/.zprezto/runcoms/zlogout ~/.zlogout
ln -sf /path/to/dotfiles/.zprezto/runcoms/zpreztorc ~/.zpreztorc
ln -sf /path/to/dotfiles/.zprezto/runcoms/zprofile ~/.zprofile
ln -sf /path/to/dotfiles/.zprezto/runcoms/zshenv ~/.zshenv
ln -sf /path/to/dotfiles/.zprezto/runcoms/zshrc ~/.zshrc

# Powerlevel10k
ln -sf /path/to/dotfiles/.p10k.zsh ~/.p10k.zsh
```

### Git

```sh
ln -sf /path/to/dotfiles/.gitconfig ~/.gitconfig
```

### Zellij

```sh
ln -sfn /path/to/dotfiles/.config/zellij ~/.config/zellij
```
