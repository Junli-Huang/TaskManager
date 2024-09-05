#!/bin/bash

# 克隆项目
git clone https://github.com/yourusername/task-manager.git
cd task-manager

# 构建并启动容器
docker-compose up --build -d

echo "Task Manager 部署完成，请访问 http://your-server-ip"
