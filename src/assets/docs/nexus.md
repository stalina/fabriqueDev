Nexus
============

Official docker image : https://hub.docker.com/r/sonatype/nexus3/

Faire un `sudo mkdir -p /tmp/fabriq/nexus` et `sudo chown 200 /tmp/fabriq/nexus` pour autoriser jenkins a écrire sur le volume  

* Docker compose :

```yml
version: "3"

services:
    nexus:
        image: sonatype/nexus3:3.2.1
        volumes:
            - "/tmp/fabriq/nexus:/nexus-data"
        ports:
            - 8082:8081 
        networks:
            - frabriqueDev

networks:
  frabriqueDev:
    driver: bridge
```

* connectez vous sur 
http://<IP>:8082/
* connectez vous en tant qu'admin : admin/admin123


