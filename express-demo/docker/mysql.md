# docker 运行命令

## 安装mysql

```docker
docker pull mysql:latest
```

## 启动mysql

```docker
docker run --name ${mysql-container} -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=${your_password} mysql:latest
```

## 进入docker镜像内部

```docker
docker exec -it ${mysql-container} /bin/sh
```

## 连接命令

```docker
mysql -uroot -p -h 127.0.0.1 -P 3306
```
