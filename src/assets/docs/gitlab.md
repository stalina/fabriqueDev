Gitlab
============

Official docker image : https://hub.docker.com/r/gitlab/gitlab-ce/


* Docker compose :

```yml
version: "3"

services:
    gitlab:
        image: gitlab/gitlab-ce:9.0.0-ce.0
        hostname: <your_ci_uri>
        ports:
            - 8080:80
            - 8443:443
        environment:
            - VIRTUAL_HOST=gitlab.{{this.identityService.identity.ciDomain}}
            - VIRTUAL_PORT=80                   
        volumes:
            - /home/walter/fabriq/gitlab/config:/etc/gitlab 
            - /home/walter/fabriq/gitlab/logs:/var/log/gitlab 
            - /home/walter/fabriq/gitlab/data:/var/opt/gitlab 

```

* Se connecter à :
http://<IP>:8080/

* Changer le mot de passe.
* New project, git repo by url : https://github.com/stalina/fabriqueDev.git, public project
