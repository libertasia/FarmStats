#!/usr/bin/env bash

docker-compose up --build --detach
# load initial dataset
curl -XPOST http://localhost:8080/init
echo ""
echo "Assignment is ready, take a look at http://localhost:3000"
