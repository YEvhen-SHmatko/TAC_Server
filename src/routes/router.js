const express = require("express");
const apiRoutes = express.Router();
const users = require("./users/index");
const verifyToken = require("../modules/check-token");

//users
apiRoutes
  .post("/auth/register", users.register)
  .post("/auth/login", users.login)
  .post("/auth/confirm/:id", users.confirm)
  .post("/auth/validationToken", verifyToken, (req, res) => {
    res.json({ tokenIsValid: true });
  })
  .post("/auth/current", verifyToken, users.сurrent)
  .get("/user/:id", verifyToken, users.getById)
  .put("/user/:id", verifyToken, users.edit);

module.exports = apiRoutes;
