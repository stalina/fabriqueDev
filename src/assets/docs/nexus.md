Nexus
============

Official docker image : https://hub.docker.com/r/sonatype/nexus3/

Launch cmd `sudo mkdir -p /home/walter/fabriq/nexus`, then `sudo chown 200 /home/walter/fabriq/nexus` to be autorised to write on the volume.   

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

* Connect to 
http://<your_ci_uri>:8082/
* Admin credentials are : admin/admin123




