Artifactory
===================

docker image : https://bintray.com/jfrog/reg2/jfrog:artifactory-oss


* Docker compose :

```yml
version: "3"

services:
    artifactory:
        image: docker.bintray.io/jfrog/artifactory-oss:5.2.0
        ports:
            - 8092:8081
        volumes:
            - /home/walter/fabriq/artifactory:/var/opt/jfrog/artifactory

```