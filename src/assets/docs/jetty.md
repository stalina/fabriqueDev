Docker Jetty
===================

docker image : https://hub.docker.com/_/jetty/

* Docker compose :

```yml
version: "3"

services:
    jetty:
        image: jetty:9.4.3
        ports:
            - 8087:8080
            - 8088:8443
        networks:
            - frabriqueDev
networks:
  frabriqueDev:
    driver: bridge
```