WebSphere
===================

docker image : https://hub.docker.com/_/websphere-liberty/

* Docker compose :

```yml
version: "3"

services:
    websphere:
        image: websphere-liberty:webProfile7
        ports:
            - 9080:9080
            - 9443:9443
         volumes:
            - /tmp/fabriq/websphere/yourwar.war:/config/dropins/yourwar.war
        networks:
            - frabriqueDev

networks:
  frabriqueDev:
    driver: bridge
```