# file deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

gco prod

git add .
git commit -m 'deploy'

git push origin prod
