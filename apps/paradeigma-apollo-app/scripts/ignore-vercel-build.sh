#!/bin/bash

trigger_packages=( 
    '.'
    '../../../packages/paradeigma-graphql'
    '../../../packages/paradeigma-mongoose'
)

for package in ${trigger_packages[@]}; do
    git diff $VERCEL_GIT_PREVIOUS_SHA HEAD --quiet $package
    exit_code=$?
    echo "Changes in $package: $exit_code"
    if [[ $exit_code -eq 1 ]]; then
        echo "Deployment triggered"
        exit 1
    fi
done

echo "No changes in trigger packages"
exit 0