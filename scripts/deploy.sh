# file deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

npm run build

git add .
git commit -m 'deploy'

git push origin master
