Synopia
===================

Docker image : https://hub.docker.com/r/keyvanfatehi/sinopia/ 

* Docker compose :

```yml
version: "3"

services:
     sinopia:
        image: keyvanfatehi/sinopia:latest
        ports:
            - 4873:4873
        environment:
            - VIRTUAL_HOST=sinopia.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=4873  
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```