# file deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git push origin master

