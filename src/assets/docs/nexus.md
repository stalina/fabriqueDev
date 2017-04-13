Nexus
============

Official docker image : https://hub.docker.com/r/sonatype/nexus3/

Faire un `sudo mkdir -p /home/walter/fabriq/nexus` et `sudo chown 200 /home/walter/fabriq/nexus` pour autoriser jenkins a écrire sur le volume  

* Docker compose :

```yml
version: "3"

services:
    nexus:
        image: sonatype/nexus3:3.2.1
        volumes:
            - "/home/walter/fabriq/nexus:/nexus-data"
        ports:
            - 8082:8081 
        environment:
            - VIRTUAL_HOST=nexus.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=8081  

```

* connectez vous sur 
http://<IP>:8082/
* connectez vous en tant qu'admin : admin/admin123


