#!/bin/bash

# Nix setup
if [ -s ~/.nix-profile/etc/profile.d/nix.sh ]; then
  # shellcheck source=/dev/null
  . ~/.nix-profile/etc/profile.d/nix.sh
fi

# mise shims
if [ -s ~/.local/bin/mise ]; then
  eval "$(~/.local/bin/mise activate --shims)"
fi

# Local environment variables
if [ -f "${HOME}/.envs.local.sh" ]; then
  # shellcheck source=/dev/null
  . "${HOME}/.envs.local.sh"
fi
