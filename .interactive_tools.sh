#!/bin/bash

# fnox setup
if command -v fnox >/dev/null 2>&1; then
  if [ -n "$ZSH_VERSION" ]; then
    eval "$(fnox activate zsh)"
  elif [ -n "$BASH_VERSION" ]; then
    eval "$(fnox activate bash)"
  fi
fi

# zoxide setup
if command -v zoxide >/dev/null 2>&1; then
  if [ -n "$ZSH_VERSION" ]; then
    eval "$(zoxide init zsh)"
  elif [ -n "$BASH_VERSION" ]; then
    eval "$(zoxide init bash)"
  fi
fi

# fzf setup
if command -v fzf >/dev/null 2>&1; then
  if [ -n "$ZSH_VERSION" ]; then
    # shellcheck source=/dev/null
    source <(fzf --zsh)
  elif [ -n "$BASH_VERSION" ]; then
    eval "$(fzf --bash)"
  fi
fi

# carapace setup
if command -v carapace >/dev/null 2>&1; then
  export CARAPACE_BRIDGES='zsh,fish,bash,inshellisense'
  if [ -n "$ZSH_VERSION" ]; then
    zstyle ':completion:*' format $'\e[2;37mCompleting %d\e[m'
  fi
  # shellcheck source=/dev/null
  source <(carapace _carapace)
fi
