JIRA
============

Docker image : https://hub.docker.com/r/cptactionhank/atlassian-jira/ 

You'll need a trial licence to use Jira.

* Docker compose :

```yml
version: "3"

services:
    jira:
        image: cptactionhank/atlassian-jira:7.3.3
        volumes:
            - /home/walter/fabriq/jira/jira:/var/atlassian/jira
            - /home/walter/fabriq/jira/logs:/opt/atlassian/jira/logs
        ports:
            - 8097:8080
        environment:
            - VIRTUAL_HOST=jira.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=8080  
```

