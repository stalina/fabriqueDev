Teamscale
============

Official docker image : https://hub.docker.com/r/cqse/teamscale/


* Docker compose :

```yml
version: "3"

services:
    teamscale:
        image: cqse/teamscale:teamscale_v3.2.0
        volumes:
            - /tmp/fabriq/teamscale/storage:/opt/teamscale/storage
            - /tmp/fabriq/teamscale/backup:/backup
        ports:
            - 8096:8080
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

