nginx有一个主进程和几个工作进程，主进程的主要目的是为了读取和评估配置并且维护工作进程。
工作进程处理实际请求，nginx在工作进程中采用事件驱动模型和OS依赖机制有效分配请求。nginx及其各个模块的工作方式取决于配置文件。

```bash
// nginx 进程列表
ps -ax | grep nginx
// 停止服务
kill -s QUIT 1628
```

## 文件服务

```
server {
  location / {
    root /data/www;
  }
  location /images/ {
    root /data;
  }
}
```

## 代理

```
server {
  location / {
    proxy_pass http://localhost:8080/;
  }
  location ~ \.(gif|jpg|png)$ {
    root /data/images;
  }
}
```