Nginx
============

Official docker image : https://hub.docker.com/_/nginx/


* Docker compose :
```
version: "3"

services:
    nginx:
        image: nginx
        ports:
            - 8081:80
        volumes:
            - /tmp/nginx/html:/usr/share/nginx/html 
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

