Gitlab
============

Official docker image : https://hub.docker.com/r/gitlab/gitlab-ce/


* Docker compose :
```
version: "3"

services:
    gitlab:
        image: gitlab/gitlab-ce:latest
        ports:
            - 8080:80
            - 8443:443
        volumes:
            - /tmp/gitlab/config:/etc/gitlab 
            - /tmp/gitlab/logs:/var/log/gitlab 
            - /tmp/gitlab/data:/var/opt/gitlab 
        networks:
            - frabriqueDev  

networks:
  frabriqueDev:
    driver: bridge
```

* Se connecter à :
http://<IP>:8080/

* Changer le mot de passe.
* New project, git repo by url : https://github.com/stalina/fabriqueDev.git, public project
