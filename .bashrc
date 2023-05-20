export LANG='ja_JP.UTF-8'
export PS1='\n\[\e[30;102m\]  \D{%Y/%m/%d} \[\e[0m\]\[\e[92;105m\]\[\e[30;105m\]  \t \[\e[95;43m\]\[\e[30m\]  \W \[\e[0m\]\[\e[33;106m\]\[\e[30;106m\] $(__git_ps1) \[\e[96;49m\] \[\e[0m\]'$'\n\\$ '

export HISTCONTROL=erasedups
export HISTTIMEFORMAT='%F %T '

if [[ $PS1 && -f /usr/share/bash-completion/bash_completion ]]; then
  . /usr/share/bash-completion/bash_completion
fi