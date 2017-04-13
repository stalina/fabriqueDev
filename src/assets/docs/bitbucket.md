Bitbucket
============

Official docker image : https://hub.docker.com/r/cptactionhank/atlassian-bitbucket/ 


* Docker compose :

```yml
version: "3"

services:
    bitbucket:
        image: cptactionhank/atlassian-bitbucket:4.14.4
        volumes:
            - /home/walter/fabriq/bitbucket/home:/var/atlassian/bitbucket
            - /home/walter/fabriq/bitbucket/logs:/opt/atlassian/bitbucket/logs
        environment:
            - VIRTUAL_HOST=bitbucket.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=7990              
        ports:
            - 8200:7990

```

