Docker Mantis
===================

docker image : https://hub.docker.com/r/vimagick/mantisbt/

* Docker compose :

```yml
version: "3"

services:
    mantisbt:
        image: vimagick/mantisbt:latest
        ports:
            - "8989:80"
        links:
            - mysql
        restart: always
        networks:
            - frabriqueDev
    mysql:
        image: mysql:latest
        environment:
            - MYSQL_ROOT_PASSWORD=root
            - MYSQL_DATABASE=bugtracker
            - MYSQL_USER=mantisbt
            - MYSQL_PASSWORD=mantisbt
        restart: always
        networks:
            - frabriqueDev

networks:
  frabriqueDev:
    driver: bridge
```

* Connet to http://<IP>:8989/
* Enter in Hostname this value : mysql
* Enter in Username this value : mantisbt
* Enter in Password this value : mantisbt
* Enter in Database this value : bugtracker
* Enter in Admin Username this value : root
* Enter in Admin Password this value : root

* User is administrator
* Password is root