Bamboo
===================

docker image : https://hub.docker.com/r/cptactionhank/atlassian-bamboo/

necessite une clef de licence d'évaluation

* Docker compose :
```
version: "3"

services:
    bamboo:
        image: cptactionhank/atlassian-bamboo:5.15.3
        ports:
            - 8091:8085
        volumes:
            - /tmp/fabriq/bamboo/data:/var/atlassian/bamboo
            - /tmp/fabriq/bamboo/logs:/opt/atlassian/bamboo/logs
        networks:
            - frabriqueDev   

networks:
  frabriqueDev:
    driver: bridge
```