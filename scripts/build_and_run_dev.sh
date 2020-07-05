#!/bin/bash

container_name="tealeavesandmoore"
tag="dev"

# docker kill "${container_name}:${tag}" || true
docker rmi "${container_name}:${tag}" || true

docker build -t $container_name:$tag .
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    $container_name:$tag