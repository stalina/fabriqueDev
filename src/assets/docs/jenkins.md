Jenkins
============

Official docker image : https://hub.docker.com/_/jenkins/


Faire un `mkdir -p /tmp/fabriq/jenkins` et `sudo chown 1000 /tmp/fabriq/jenkins` pour autoriser jenkins a écrire sur le volume  

* Docker compose :

```yml
version: "3"

services:
    jenkins:
        image: jenkins:2.32.3-alpine
        ports:
            - 8081:8080
        volumes:
            - /tmp/fabriq/jenkins:/var/jenkins_home 
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

ATTENTION : recuperer le mot de passe Jenkins dans les logs


* Se connecter à :
http://<IP>:8081/

* Entrer le mot ce passe admin retrouvé dans les logs.
* Selectionner "select plugin to install" => cocher les plugin qui correspondent à votre SCM + NodeJs Plugin
* "Suivant" (keep calm, download is coming)
* Créer votre utilisateur jenkins
* Créer un job "freestyle"
* builder en utilisant les commandes nodeJS : npm install & ng build --prod
