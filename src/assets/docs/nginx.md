Nginx
============

Official docker image : https://hub.docker.com/_/nginx/


* Docker compose :
```
version: "3"

services:
    nginx:
        image: nginx:1.11-alpine
        ports:
            - 8084:80
        volumes:
            - /tmp/fabriq/nginx/html:/usr/share/nginx/html 
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

