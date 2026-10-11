#!/bin/sh

set -e

echo "Starting deployment preparation..."

if ! command -v docker >/dev/null 2>&1; then
    echo "Error: Docker is not installed."
    exit 1
fi

echo "Building backend Docker image..."

docker build -t week4-task3-server ./server

echo "Docker image built successfully!"
echo "Next, deploy this image to your chosen cloud platform."