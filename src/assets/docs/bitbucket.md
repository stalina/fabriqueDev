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
            - /tmp/fabriq/bitbucket/home:/var/atlassian/bitbucket
            - /tmp/fabriq/bitbucket/logs:/opt/atlassian/bitbucket/logs
        ports:
            - 8200:7990
        networks:
            - frabriqueDev 

networks:
  frabriqueDev:
    driver: bridge
```

