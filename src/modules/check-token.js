const jwt = require("jsonwebtoken");
const getToken = require("./getToken");

const checkToken = (req, res, next) => {
  const token = getToken(req);
  const secretKey = req.app.settings.superSecret;

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: "Failed to authenticate token.",
      });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = checkToken;
