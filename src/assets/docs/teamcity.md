Teamcity
===================

offical docker image : https://hub.docker.com/r/jetbrains/teamcity-server/ 


* Docker compose :

```yml
version: "3"

services:
     teamcity:
        image: jetbrains/teamcity-server:10.0.5
        volumes:
            - /tmp/fabriq/teamcity/home:/data/teamcity_server/datadir
            - /tmp/fabriq/teamcity/logs:/opt/teamcity/logs
        ports:
            - 8101:8111
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```