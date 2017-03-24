Gitlab
============

Official docker image : https://hub.docker.com/r/gitlab/gitlab-ce/


* Docker compose :
```
version: "3"

services:
    gitlab:
        image: gitlab/gitlab-ce:9.0.0-ce.0
        ports:
            - 8080:80
            - 8443:443
        volumes:
            - /tmp/frabiq/gitlab/config:/etc/gitlab 
            - /tmp/frabiq/gitlab/logs:/var/log/gitlab 
            - /tmp/frabiq/gitlab/data:/var/opt/gitlab 
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
