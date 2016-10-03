#!/usr/bin/env bash
docker build -t port-mapping-example ..
docker run -d -p 9001:9000 port-mapping-example
