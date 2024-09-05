
# Task Manager

## 项目介绍

**Task Manager** 是一个基于 **Node.js**（后端）和 **Vue.js + Quasar**（前端）构建的任务管理系统。用户可以注册和登录，创建、查看和管理任务，支持长期任务、每日任务、每周任务等多种类型。

本项目支持 **Swagger 自动生成 API 文档**，可以通过 **Docker** 容器化运行，也可以在本地无 Docker 环境下测试运行。

---

## 目录结构

```plaintext
task-manager/
├── backend/                     # 后端 Node.js + Express 应用
│   ├── Dockerfile
│   ├── app.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── admin/                   # 后台管理 (AdminJS)
│   ├── api-docs/                # API 文档 (Swagger 自动生成)
│   ├── package.json
│   ├── .env.example
│
├── frontend/                    # 前端 Vue.js + Quasar 应用
│   ├── Dockerfile
│   ├── src/
│   ├── quasar.conf.js
│   ├── package.json
│
├── nginx/                       # Nginx 配置
├── .vscode/                     # VSCode 配置文件
├── docker-compose.yml
├── deploy.sh
├── .gitignore
└── README.md
```

---

## 功能

- 用户注册和登录
- JWT 鉴权
- 任务的创建、查看、编辑和管理
- 多种任务类型：长期任务、每日任务、每周任务、每月任务等
- 基于 **MongoDB** 和 **Redis** 的持久化存储和缓存
- 响应式设计，适配 PC 和移动端
- 后台管理 (AdminJS)
- **Swagger 自动生成 API 文档**

---

## 环境要求

- **Node.js** (v18+)
- **MongoDB** (v4.0+)
- **Redis** (v5.0+)
- **Nginx** (可选，Docker 中配置)
- **Docker** (可选，用于容器化运行)

---

## 本地运行项目（无 Docker）

### 1. 克隆项目

```bash
git clone git@github.com:Junli-Huang/TaskManager.git
cd task-manager
```

### 2. 启动 MongoDB 和 Redis

- 启动 **MongoDB**：
  ```bash
  mongod
  ```
- 启动 **Redis**：
  ```bash
  redis-server
  ```

### 3. 配置环境变量

在 `backend/` 目录下创建 `.env` 文件，内容如下：

```env
MONGO_URI=mongodb://localhost:27017/task-manager
REDIS_URI=redis://localhost:6379
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. 启动后端服务

```bash
cd backend
npm install
npm start
```

### 5. 启动前端服务

```bash
cd ../frontend
npm install
npm run dev
```

- 前端服务默认在 `http://localhost:8080` 运行，后端 API 在 `http://localhost:5000`。

---

## 使用 Docker 运行

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. 使用 Docker Compose 构建并启动服务

确保已安装 **Docker** 和 **Docker Compose**，然后运行以下命令：

```bash
docker-compose up --build -d
```

- 前端应用将在 `http://localhost` 运行，后端 API 在 `http://localhost/api`。

### 3. 关闭服务

```bash
docker-compose down
```

---

## API 文档生成与访问

### 自动生成 API 文档

- Swagger API 文档会自动从路由文件中生成，无需手动编写 `swagger.json`。
- 在路由文件中使用符合 OpenAPI 规范的注释，`swagger-jsdoc` 会自动生成文档。

### 访问 API 文档

- 在运行后端服务后，你可以通过以下地址访问自动生成的 API 文档：
  ```bash
  http://localhost:5000/api-docs
  ```

---

## API 参考

以下是项目中一些关键的 API 端点：

### 1. **用户相关**

- **POST** `/api/auth/register`: 用户注册
- **POST** `/api/auth/login`: 用户登录

### 2. **任务相关**

- **GET** `/api/tasks`: 获取用户的所有任务
- **POST** `/api/tasks`: 创建新任务

---

## VSCode 配置

项目包含 VSCode 的调试配置文件，便于在 VSCode 中进行调试：

- **.vscode/settings.json**：代码格式化、自动保存等设置。
- **.vscode/launch.json**：用于启动后端或前端的调试配置。

---

## License

本项目采用 [GNU General Public License v3.0](./LICENSE)。
