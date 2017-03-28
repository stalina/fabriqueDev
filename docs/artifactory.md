Artifactory
===================

docker image : https://bintray.com/jfrog/reg2/jfrog:artifactory-oss


* Docker compose :
```
version: "3"

services:
    artifactory:
        image: docker.bintray.io/jfrog/artifactory-oss:5.2.0
        ports:
            - 8092:8081
        volumes:
            - /tmp/fabriq/artifactory:/var/opt/jfrog/artifactory
        networks:
            - frabriqueDev    

networks:
  frabriqueDev:
    driver: bridge
```