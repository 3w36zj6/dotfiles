# dotfiles

## Prerequisites

- curl
- git

## Bootstrap with mise

- https://mise.en.dev/getting-started.html
- https://mise.en.dev/bootstrap.html

```sh
curl -fsSL https://mise.run | MISE_VERSION=v2026.7.7 sh

git clone git@github.com:3w36zj6/dotfiles.git
cd dotfiles

MISE_GLOBAL_CONFIG_FILE=".config/mise/config.toml" "$HOME/.local/bin/mise" bootstrap --force-dotfiles

# Restart shell
```

## Post-bootstrap configuration

### Local environment variables

Local environment variables are managed separately in `.envs.local.sh`:

```sh
cat > ~/.envs.local.sh << 'EOF'
export YOUR_VARIABLE="your-value"
EOF
```

### Local Git configuration

Local git configuration is managed separately in `.gitconfig.local`:

```sh
cat > ~/.gitconfig.local << 'EOF'
[user]
	email = your-email@example.com
	name = your-name
EOF
```
