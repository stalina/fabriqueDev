HTTPD
============

Official docker image : https://hub.docker.com/_/httpd/


* Docker compose :

```yml
version: "3"

services:
    httpd:
        image: httpd:2.4.25
        ports:
            - 8095:80
        volumes:
            - /home/walter/fabriq/httpd/html:/usr/local/apache2/htdocs/ 
```

