Docker Tomcat
===================

docker image : https://hub.docker.com/_/tomcat/

* Docker compose :

```yml
version: "3"

services:
    tomcat:
        image: tomcat:9-alpine
        ports:
            - 9090:8080
        networks:
            - frabriqueDev

networks:
  frabriqueDev:
    driver: bridge
```