#!/bin/bash

# Nix setup
if [ -s ~/.nix-profile/etc/profile.d/nix.sh ]; then
  # shellcheck source=/dev/null
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

# Local environment variables
if [ -f "${HOME}/.envs.local.sh" ]; then
  # shellcheck source=/dev/null
  . "${HOME}/.envs.local.sh"
fi
