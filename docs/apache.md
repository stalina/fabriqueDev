HTTPD
============

Official docker image : https://hub.docker.com/_/httpd/


* Docker compose :
```
version: "3"

services:
    httpd:
        image: httpd:2.4.25-alpine
        ports:
            - 8095:80
        volumes:
            - /tmp/fabriq/httpd/html:/usr/local/apache2/htdocs/ 
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

