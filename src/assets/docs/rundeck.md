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
            - 8483:4443
        volumes:
            - /tmp/fabriq/rundeck/etc:/etc/rundeck
            - /tmp/fabriq/rundeck/var:/var/rundeck
            - /tmp/fabriq/rundeck/varlog:/var/log/rundeck
            - /tmp/fabriq/rundeck/plugins:/opt/rundeck-plugins
            - /tmp/fabriq/rundeck/log:/var/lib/rundeck/logs
            - /tmp/fabriq/rundeck/data:/var/lib/rundeck/var/storage
        environment:
            - RUNDECK_ADMIN_PASSWORD=admin
            - RUNDECK_WITH_SSL=false
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

* connectez vous sur 
http://<IP>:8083/
* connectez vous en tant qu'admin : admin/admin