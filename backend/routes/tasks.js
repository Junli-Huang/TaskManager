const express = require('express');
const { getUserTasks, createTask } = require('../controllers/taskController');
const { authenticateToken } = require('../middlewares/auth');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: 获取用户的所有任务
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: 成功返回任务列表
 *       401:
 *         description: 未授权
 */
router.get('/', authenticateToken, getUserTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: 创建新任务
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               target_count:
 *                 type: number
 *               cycle_type:
 *                 type: string
 *               specific_dates:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: 成功创建任务
 *       401:
 *         description: 未授权
 */
router.post('/', authenticateToken, createTask);

module.exports = router;
