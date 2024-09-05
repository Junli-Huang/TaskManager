const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  target_count: { type: Number, required: true },
  current_count: { type: Number, default: 0 },
  status: { type: String, enum: ['未完成', '进行中', '已完成'], default: '未完成' },
  type: { type: String, required: true }, 
  cycle_type: { type: String, enum: ['长期', '每日', '每周', '每月', '周x', '每月x号', '具体日期'], required: true },
  cycle_value: [Number],  
  specific_dates: [Date],  
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
