# file deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

git config user.email marksampson70@gmail.com
git config user.name SampsonM

git add .
git commit -m 'deploy'

git push origin prod
