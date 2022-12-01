const jwt = require("jsonwebtoken");
const config = require("../config");

const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "Please login again!! ..." });
  }
  jwt.verify(token, config.SECRET, (err, userId) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token ..." });
    }
    req.user = {
      id: userId,
    };
    next();
  });
};

module.exports = checkAuth;