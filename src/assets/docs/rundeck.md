Rundeck
============

Official docker image : https://hub.docker.com/r/jordan/rundeck/


* Docker compose :

```yml
version: "3"

services:
    rundeck:
        image: jordan/rundeck:2.7.3
        ports:
            - 8083:4440
        volumes:
            - /home/walter/fabriq/rundeck/etc:/etc/rundeck
            - /home/walter/fabriq/rundeck/var:/var/rundeck
            - /home/walter/fabriq/rundeck/varlog:/var/log/rundeck
            - /home/walter/fabriq/rundeck/plugins:/opt/rundeck-plugins
            - /home/walter/fabriq/rundeck/log:/var/lib/rundeck/logs
            - /home/walter/fabriq/rundeck/data:/var/lib/rundeck/var/storage
            - /home/walter/fabriq/shared:/tmp/fabriq/shared
        environment:
            - RUNDECK_ADMIN_PASSWORD=admin
            - SERVER_URL=http://localhost:8083
            - VIRTUAL_HOST=rundeck.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=4440  
```

* Connect to : http://rundeck.{{this.identityService.identity.ciDomain}}/
* Admin credentials are : admin/admin