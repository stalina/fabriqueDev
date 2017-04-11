Docker Registry
===================

docker image : https://hub.docker.com/_/registry/

* Docker compose :

```yml
version: "3"

services:
    dockerhub:
        image: registry:2
        ports:
            - 5000:5000
        volumes:
            - /home/walter/fabriq/dockerregistry/data:/var/lib/registry

```