Wekan
================

Official docker image : https://hub.docker.com/r/mquandalle/wekan/

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
            - ROOT_URL=http://localhost:8086

    
    wekandb:
        image: mongo
        volumes:
            - /home/walter/fabriq/wekan/mongo:/data/db

```

* creer votre propre utilisateur (une erreur 500 peut survenir mais peut-être ignorée)