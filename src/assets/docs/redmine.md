Docker Redmine
===================

Official Docker image : https://hub.docker.com/_/redmine/

* Docker compose :

```yml
version: "3"

services:
    redminedb:
        image: mariadb
        environment:
            MYSQL_ROOT_PASSWORD: example
            MYSQL_DATABASE: redmine
        volumes:
            - /home/walter/fabriq/redmine/db:/var/lib/mysql


    redmine:
        image: redmine
        ports:
           - 3000:3000
        environment:
           REDMINE_DB_MYSQL: redminedb
           REDMINE_DB_PASSWORD: example
           VIRTUAL_HOST: redmine.{{this.identityService.identity.ciDomain}}
           VIRTUAL_PORT: 3000  
        volumes:
            - /home/walter/fabriq/redmine/files:/usr/src/redmine/files
        depends_on:
           - redminedb

```

* Connect to http://<your_ci_uri>:3000/
* Admin credentials are : admin/admin