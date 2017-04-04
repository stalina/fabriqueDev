gocd
==============

Official Docker image :  
https://hub.docker.com/r/gocd/gocd-server/
https://hub.docker.com/r/gocd/gocd-dev/

* Docker compose :

```yml
version: "3"

services:
    gocd-server:
        image: gocd/gocd-server:v17.3.0
        ports:
            - 8093:8153
            - 8094:8154
        volumes:
            - /tmp/fabriq/godata/addons:/godata/addons
            - /tmp/fabriq/godata/artifacts:/godata/artifacts
            - /tmp/fabriq/godata/config:/godata/config
            - /tmp/fabriq/godata/db:/godata/db
            - /tmp/fabriq/godata/logs:/godata/logs
            - /tmp/fabriq/godata/plugins:/godata/plugins 	
            - /tmp/fabriq/godata/go:/home/go
        networks:
            - frabriqueDev  
    gocd-agent:
        image: gocd/gocd-agent
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
            - /tmp/fabriq/godata/go-agent/log:/var/log/go-server/
        links:
            - gocd-server
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```