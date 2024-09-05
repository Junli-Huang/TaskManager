const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const User = require('../models/user');
const Task = require('../models/task');

// 注册 Mongoose 适配器
AdminJS.registerAdapter(AdminJSMongoose);

const adminOptions = {
  resources: [User, Task],  // 管理用户和任务的后台管理
  branding: {
    companyName: 'Task Manager Admin',
  },
};

// 创建 AdminJS 实例
const adminJs = new AdminJS(adminOptions);

// AdminJS 的路由
const adminRouter = AdminJSExpress.buildRouter(adminJs);

module.exports = { adminJs, adminRouter };
