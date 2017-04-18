Teamscale
============

Docker image : https://hub.docker.com/r/cqse/teamscale/


* Docker compose :

```yml
version: "3"

services:
    teamscale:
        image: cqse/teamscale:teamscale_v3.2.0
        volumes:
            - /home/walter/fabriq/teamscale/storage:/opt/teamscale/storage
            - /home/walter/fabriq/teamscale/backup:/backup
        ports:
            - 8096:8080
        environment:
            - VIRTUAL_HOST=teamscale.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=8080  
```

