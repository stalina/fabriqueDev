Synopia
===================

offical docker image : https://hub.docker.com/r/keyvanfatehi/sinopia/ 

docker run --name sinopia -d -p 4873:4873 keyvanfatehi/sinopia:latest

* Docker compose :

```yml
version: "3"

services:
     sinopia:
        image: jkeyvanfatehi/sinopia:latest
        ports:
            - 4873:4873
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```