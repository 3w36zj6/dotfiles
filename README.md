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
```

### Git config

```sh
ln -sf /path/to/dotfiles/.gitconfig ~/.gitconfig
```

### Zellij

```sh
ln -sfn /path/to/dotfiles/.config/zellij ~/.config/zellij
```
