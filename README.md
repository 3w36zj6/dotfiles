# dotfiles

## Usage

### Aliases

```sh
ln -sf /path/to/dotfiles/.aliases ~/.aliases
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
