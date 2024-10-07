const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const isAdmin = async (req, res, next) => {
  const { email } = req.user
  const adminUser = await User.findOne({ email })
  if (adminUser.role !== "admin") {
      return res.status(403).json({ message: "You are not an admin." })
  }
  else {
      next()
  }
}


module.exports = { protect, isAdmin };