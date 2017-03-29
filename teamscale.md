Teamscale
============

Official docker image : https://hub.docker.com/r/cqse/teamscale/


* Docker compose :
```
version: "3"

services:
    teamscale:
        image: cqse/teamscale:teamscale_v3.2.0
        volumes:
            - /tmp/fabriq/teamscale/storage:/opt/teamscale/storage
            - /tmp/fabriq/teamscale/logs:/opt/teamscale/logs
            - /tmp/fabriq/teamscale/conf/jvm.properties:/opt/teamscale/config/jvm.properties:ro
            - /tmp/fabriq/teamscale/conf/teamscale.properties:/opt/teamscale/config/teamscale.properties:ro
            - /tmp/fabriq/teamscale/conf/cache4j.properties:/opt/teamscale/config/cache4j.properties:ro
            - /tmp/fabriq/teamscale/conf/logging.properties:/opt/teamscale/config/logging.properties:ro
            - /tmp/fabriq/teamscale/conf/teamscale.license:/opt/teamscale/config/teamscale.license:ro
            - /tmp/fabriq/teamscale/backup:/backup
        ports:
            - 8096:8080
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

