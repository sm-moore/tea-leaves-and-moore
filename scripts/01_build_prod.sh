#!/bin/bash
container_name="tealeavesandmoore_prod"

tag="$1"

if [[ "$tag" == "" ]]; then
    echo "please provide tag name"
    exit 1
fi

# Make sure an image with this tag doesn't already exist.
docker rmi "${container_name}:${tag}" || true

docker build -f Dockerfile.prod -t "$container_name:$tag" .

# Tag as latest
docker tag "$container_name:$tag" $container_name:latest

# Optionally run latest
if [[ "$2" == "--run" ]]; then
    docker run -it --rm -p 1337:80 $container_name:latest
fi