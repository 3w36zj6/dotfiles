#!/bin/bash

# zoxide setup
if type zoxide >/dev/null 2>&1; then
  if [ -n "$ZSH_VERSION" ]; then
    eval "$(zoxide init zsh)"
  elif [ -n "$BASH_VERSION" ]; then
    eval "$(zoxide init bash)"
  fi
fi

# fzf setup
if type fzf >/dev/null 2>&1; then
  if [ -n "$ZSH_VERSION" ]; then
    source <(fzf --zsh)
  elif [ -n "$BASH_VERSION" ]; then
    eval "$(fzf --bash)"
  fi
fi

# carapace setup
if type carapace >/dev/null 2>&1; then
  export CARAPACE_BRIDGES='zsh,fish,bash,inshellisense'
  if [ -n "$ZSH_VERSION" ]; then
    zstyle ':completion:*' format $'\e[2;37mCompleting %d\e[m'
  fi
  source <(carapace _carapace)
fi
