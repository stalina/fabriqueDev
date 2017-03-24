SonarQube
============

Official docker image : https://hub.docker.com/_/sonarqube/


* Docker compose :
```
version: "3"

services:
    sonarqube:
        image: sonarqube:6.3-alpine
        ports:
            - 8085:9000
        volumes:
            - /tmp/frabiq/sonarqube/conf:/opt/sonarqube/conf
            - /tmp/frabiq/sonarqube/data:/opt/sonarqube/data
            - /tmp/frabiq/sonarqube/extensions:/opt/sonarqube/extensions
            - /tmp/frabiq/sonarqube/bundled-plugins:/opt/sonarqube/lib/bundled-plugins
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

* connectez vous sur 
http://<IP>:8085/
* connectez vous en tant qu'admin : admin/admin
