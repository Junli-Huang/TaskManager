# 使用 Node.js 官方镜像
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目源代码
COPY . .

# 暴露端口
EXPOSE 5000

# 启动应用
CMD ["npm", "start"]
