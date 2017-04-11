RocketChat
================

Official docker image : https://hub.docker.com/r/rocketchat/rocket.chat/

* Docker compose :

```yml
version: "3"

services:
    db:
        image: mongo
        volumes:
            - /home/walter/fabriq/rocketchat/data/runtime/db:/data/db
            - /home/walter/fabriq/rocketchat/data/dump:/dump
        command: mongod --smallfiles

    rocketchat:
        image: rocketchat/rocket.chat:latest
        environment:
            - MONGO_URL=mongodb://db:27017/rocketchat
            - ROOT_URL=https://chat.inumio.com
            - Accounts_UseDNSDomainCheck=True
        links:
            - db:db
        ports:
            - 3003:3000

    hubot:
        image: rocketchat/hubot-rocketchat:v0.1.4
        environment:
            - ROCKETCHAT_URL=rocketchat:3000
            - ROCKETCHAT_ROOM=GENERAL
            - ROCKETCHAT_USER=Botname
            - ROCKETCHAT_PASSWORD=BotPassw0rd
            - BOT_NAME=Botname
            - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-greetings
        links:
            - rocketchat:rocketchat
        # this is used to expose the hubot port for notifications on the host on port 3001, e.g. for hubot-jenkins-notifier
        ports:
            - 3001:8080

```