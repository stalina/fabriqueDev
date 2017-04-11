gocd
==============

Official Docker image :  
https://hub.docker.com/r/gocd/gocd-server/

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
            - /home/walter/fabriq/godata/addons:/godata/addons
            - /home/walter/fabriq/godata/artifacts:/godata/artifacts
            - /home/walter/fabriq/godata/config:/godata/config
            - /home/walter/fabriq/godata/db:/godata/db
            - /home/walter/fabriq/godata/logs:/godata/logs
            - /home/walter/fabriq/godata/plugins:/godata/plugins
            - /home/walter/fabriq/godata/go:/home/go   

```