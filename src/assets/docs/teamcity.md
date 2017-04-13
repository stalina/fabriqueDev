Teamcity
===================

offical docker image : https://hub.docker.com/r/jetbrains/teamcity-server/ 


* Docker compose :

```yml
version: "3"

services:
     teamcity:
        image: jetbrains/teamcity-server:10.0.5
        volumes:
            - /home/walter/fabriq/teamcity/home:/data/teamcity_server/datadir
            - /home/walter/fabriq/teamcity/logs:/opt/teamcity/logs
        ports:
            - 8101:8111
        environment:
            - VIRTUAL_HOST=teamcity.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=8111  

```