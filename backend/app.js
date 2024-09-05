const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// 引入后台管理
const { adminJs, adminRouter } = require('./admin/admin');

// 加载环境变量
dotenv.config();

const app = express();

// 使用 CORS 允许跨域请求
app.use(cors());
app.use(express.json());

// MongoDB 连接
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // 如果 MongoDB 连接失败，退出进程
  });

// Redis 连接
const redisClient = redis.createClient({ url: process.env.REDIS_URI });
redisClient.connect().then(() => {
  console.log('Redis connected');
}).catch(err => {
  console.error('Redis connection error:', err);
  process.exit(1);  // 如果 Redis 连接失败，退出进程
});

// Swagger 配置
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Task Manager API 文档',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ['./routes/*.js'],  // 自动扫描 routes 目录下的路由文件
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 路由
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// 后台管理路由
app.use(adminJs.options.rootPath, adminRouter);

// Swagger API 文档路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
