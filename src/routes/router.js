const express = require("express");
const apiRoutes = express.Router();
const users = require("./users/index");

//users
apiRoutes
  .post("/auth/current", users.сurrent) //true
  .get("/user/:id", users.getById)
  .put("/user/:id", users.edit);

module.exports = apiRoutes;
