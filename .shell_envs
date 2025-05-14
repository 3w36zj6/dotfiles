#!/bin/bash

# Nix setup
if [ -s ~/.nix-profile/etc/profile.d/nix.sh ]; then
  . ~/.nix-profile/etc/profile.d/nix.sh
fi

# mise setup
if [ -s ~/.local/bin/mise ]; then
  if [ -n "$BASH_VERSION" ]; then
    eval "$(~/.local/bin/mise activate bash)"
  elif [ -n "$ZSH_VERSION" ]; then
    eval "$(~/.local/bin/mise activate zsh)"
  fi
  eval "$(mise activate --shims)"
fi
