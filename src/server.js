const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/router");
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/errorHandler");
const config = require("./configs/config");
const authRouter = require("./routes/authRouter");
const verifyToken = require("./modules/check-token");

const startServer = async (port) => {
  app
    .set("superSecret", config.secret)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use(
      "/",
      function (req, res, next) {
        const header = req.headers.authorization;
        console.log("header", header);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
      },
      authRouter,
      verifyToken,
      router
    )
    .use("*", errorHandler);

  const server = app.listen(port, () => {
    console.log(
      "Server was started at http://localhost:" + server.address().port
    );
  });
};

module.exports = startServer;
