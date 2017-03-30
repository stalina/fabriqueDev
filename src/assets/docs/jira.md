JIRA
============

Official docker image : https://hub.docker.com/r/cptactionhank/atlassian-jira/ 


* Docker compose :

```yml
version: "3"

services:
    jira:
        image: cptactionhank/atlassian-jira:7.3.3
        volumes:
            - /tmp/fabriq/jira/jira:/var/atlassian/jira
            - /tmp/fabriq/jira/logs:/opt/atlassian/jira/logs
        ports:
            - 8097:8080
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

