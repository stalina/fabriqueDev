Mercurial
============

docker image :  https://hub.docker.com/r/miguillo/mercurial-server/

Before launch : `docker run -v /tmp/fabriq/mercurial:/var/lib/mercurial-server/repos -p 22222:2222 -e HG_ROOTUSER_KEYS="$(ssh-add -L)" miguillo/mercurial-server` to generate SSH keys


* Docker compose :
```
version: "3"

services:
    mercurial:
        image: miguillo/mercurial-server
        ports:
            - 22222:2222
        volumes:
            - /tmp/fabriq/mercurial/:/var/lib/mercurial-server/repos
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

