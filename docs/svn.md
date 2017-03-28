SVN
==============

Official docker image : https://hub.docker.com/r/krisdavison/svn-server/

* Docker compose :
```
version: "3"

services:
    svn:
        image: marvambass/subversion
        ports:
            - 8090:80
        volumes:
            - /tmp/fabriq/svn/local:/var/local/svn
            - /tmp/fabriq/svn/backup:/var/svn-backup
            - /tmp/fabriq/svn/dav:/etc/apache2/dav_svn/
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```