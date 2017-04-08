Mattermost
==============

Official docker image : https://hub.docker.com/r/mattermost/platform/

* Docker compose :

```yml
version: "3"

services:
    mattermost:
        image: mattermost/mattermost-preview:3.7
        ports:
            - 8077:8065
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```