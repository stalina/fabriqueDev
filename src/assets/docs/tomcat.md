Docker Tomcat
===================

docker image : https://hub.docker.com/_/tomcat/

* Docker compose :

```yml
version: "3"

services:
    tomcat:
        image: tomcat:9
        ports:
            - 9090:8080
        volumes:
            - /home/walter/tomcat/ROOT:/usr/local/tomcat/webapps/ROOT
        networks:
            - frabriqueDev

networks:
  frabriqueDev:
    driver: bridge
```