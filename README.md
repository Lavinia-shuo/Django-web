## **Online Mobile Game**

Django框架实战

------

### Introduction

*A MOBA game on web, each game supports multi players battling together. The game provides user login system,*

*and stores personal information in the server.*

------

### Environment

Server: Ali Cloud

Image: Docker

Editor:  VScode

OS: Ubuntu

------

### Run 

```
启动nginx服务               sudo /etc/init.d/nginx start
启动redis-server服务        sudo redis-server /etc/redis/redis.conf
启动uwsgi服务               uwsgi –ini scripts/uwsgi.ini
启动 django_channels服务    daphne -b 0.0.0.0 -p 5015 acapp.asgi:application
```

------

### Highlights

- 游戏登录系统和积分系统由 Django 框架开发，采用前后端分离架构；
-  通过 WebSocket 网络协议，实现在线聊天室、实时移动等功能；
- 使用 Redis 存储实时对局信息，确保战绩实时性；
-  使用 Django 默认数据库 SQLite 存储用户信息，满足轻量存储需求。


