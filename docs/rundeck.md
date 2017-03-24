Rundeck
============

Official docker image : https://hub.docker.com/r/jordan/rundeck/


* Docker compose :
```
version: "3"

services:
    rundeck:
        image: jordan/rundeck
        ports:
            - 8083:4440
            - 8483:4443
        volumes:
            - /tmp/frabiq/rundeck/etc:/etc/rundeck
            - /tmp/frabiq/rundeck/var:/var/rundeck
            - /tmp/frabiq/rundeck/varlog:/var/log/rundeck
            - /tmp/frabiq/rundeck/plugins:/opt/rundeck-plugins
            - /tmp/frabiq/rundeck/log:/var/lib/rundeck/logs
            - /tmp/frabiq/rundeck/data:/var/lib/rundeck/var/storage
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