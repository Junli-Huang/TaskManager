const Task = require('../models/task');

// 获取用户任务
exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user_id: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 创建任务
exports.createTask = async (req, res) => {
  const { name, description, target_count, cycle_type, cycle_value, specific_dates } = req.body;
  try {
    const task = new Task({
      name,
      description,
      target_count,
      current_count: 0,
      cycle_type,
      cycle_value,
      specific_dates,
      user_id: req.user.id
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
