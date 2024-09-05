# 使用 Node.js 官方镜像
FROM node:18 AS build

# 创建工作目录
WORKDIR /usr/src/app

# 复制 package.json 并安装依赖
COPY package*.json ./
RUN npm install

# 复制源代码并构建 Quasar 应用
COPY . .
RUN npm run build

# 使用 Nginx 作为静态文件服务器
FROM nginx:alpine

# 复制构建好的文件到 Nginx HTML 目录
COPY --from=build /usr/src/app/dist/spa /usr/share/nginx/html

# 暴露 Nginx 端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
