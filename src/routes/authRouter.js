const express = require("express");
const apiRoutes = express.Router();
const users = require("./users/index");
apiRoutes
  .post("/auth/register", users.register) //true
  .post("/auth/login", users.login); //false

module.exports = apiRoutes;
