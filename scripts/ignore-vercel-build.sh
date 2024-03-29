#!/bin/bash

# Set the current working directory to this folder.
cd "$(dirname "$0")"

# Based on the application's dependencies, define the packages that should
# trigger a Vercel deployment when changing.
if [[ $1 == "apollo-app" ]]; then
    triggers=(
        '../apps/paradeigma-apollo-app'
        '../packages/paradeigma-graphql'
        '../packages/paradeigma-mongoose'
    )
elif [[ $1 == "web-app" ]]; then
    triggers=(
        '../apps/paradeigma-web-app'
        '../packages/paradeigma-graphql'
    )
else
    echo "Invalid app name."
    exit 0
fi

cloned_first_commit=$(git rev-list --max-parents=0 HEAD)
echo "First commit in clone: $cloned_first_commit"

for package in ${triggers[@]}; do
    git diff --quiet $cloned_first_commit HEAD -- $package
    exit_code=$?
    echo "Changes in $package: $exit_code"
    if [[ $exit_code -eq 1 ]]; then
        echo "Deployment triggered."
        exit 1
    fi
done

echo "No changes in trigger packages."
exit 0