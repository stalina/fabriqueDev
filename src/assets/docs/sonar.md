SonarQube
============

Official docker image : https://hub.docker.com/_/sonarqube/


* Docker compose :

```yml
version: "3"

services:
    sonarqube:
        image: sonarqube:6.3
        ports:
            - 8085:9000
        environment:
            - VIRTUAL_HOST=sonar.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=9000  
        volumes:
            - /home/walter/fabriq/sonarqube/conf:/opt/sonarqube/conf
            - /home/walter/fabriq/sonarqube/data:/opt/sonarqube/data
            - /home/walter/fabriq/sonarqube/extensions:/opt/sonarqube/extensions
            - /home/walter/fabriq/sonarqube/bundled-plugins:/opt/sonarqube/lib/bundled-plugins

```

* Connect to : http://<your_ci_uri>:8085/
* Admin credentials are : admin/admin
