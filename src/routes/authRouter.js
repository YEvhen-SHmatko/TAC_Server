const express = require("express");
const apiRoutes = express.Router();
const users = require("./users/index");
apiRoutes
  .post("/auth/register", users.register) //true
  .post("/auth/login", users.login) //true
  .post("/auth/confirm/:id", users.confirm); //false

module.exports = apiRoutes;
