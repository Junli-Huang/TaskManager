const jwt = require('jsonwebtoken');

// JWT 验证中间件
exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ error: '未授权' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: '无效token' });
    req.user = user;
    next();
  });
};
