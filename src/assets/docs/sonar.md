SonarQube
============

Official docker image : https://hub.docker.com/_/sonarqube/


* Docker compose :

```yml
version: "3"

services:
    sonarqube:
        image: sonarqube:6.3-alpine
        ports:
            - 8085:9000
        volumes:
            - /tmp/fabriq/sonarqube/conf:/opt/sonarqube/conf
            - /tmp/fabriq/sonarqube/data:/opt/sonarqube/data
            - /tmp/fabriq/sonarqube/extensions:/opt/sonarqube/extensions
            - /tmp/fabriq/sonarqube/bundled-plugins:/opt/sonarqube/lib/bundled-plugins
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

* connectez vous sur 
http://<IP>:8085/
* connectez vous en tant qu'admin : admin/admin
