#!/bin/bash

container_name="tealeavesandmoore_prod"
push_location="us.gcr.io/fluid-mix-282315"
tag="latest"

docker tag $container_name:$tag "$push_location/$container_name:$tag"
docker push "$push_location/$container_name:$tag"