Bamboo
===================

Docker image : https://hub.docker.com/r/cptactionhank/atlassian-bamboo/

You'll need a trial licence to use Bamboo.

* Docker compose :

```yml
version: "3"

services:
    bamboo:
        image: cptactionhank/atlassian-bamboo:5.15.3
        ports:
            - 8091:8085
        environment:
            - VIRTUAL_HOST=apache.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=8085              
        volumes:
            - /home/walter/fabriq/bamboo/data:/var/atlassian/bamboo
            - /home/walter/fabriq/bamboo/logs:/opt/atlassian/bamboo/logs

```