Wekan
================

Docker image : https://hub.docker.com/r/mquandalle/wekan/

* Docker compose :

```yml
version: "3"

services:
    wekan:
        image: mquandalle/wekan:latest
        ports:
            - 8086:80
        environment:
            - MONGO_URL=mongodb://wekandb/wekan
            - ROOT_URL=http://wekan.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_HOST=wekan.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=80  

    
    wekandb:
        image: mongo
        volumes:
            - /home/walter/fabriq/wekan/mongo:/data/db

```

* Create your own user (a 500 HTTP error might happened, this can be ignored)