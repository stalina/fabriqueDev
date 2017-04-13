SVN
==============

Docker image : https://hub.docker.com/r/marvambass/subversion/

* Docker compose :

```yml
version: "3"

services:
    svn:
        image: marvambass/subversion
        ports:
            - 8090:80
        environment:
            - VIRTUAL_HOST=svn.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=80  
        volumes:
            - /home/walter/fabriq/svn/local:/var/local/svn
            - /home/walter/fabriq/svn/backup:/var/svn-backup
            - /home/walter/fabriq/svn/dav:/etc/apache2/dav_svn/

```