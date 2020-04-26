const startServer = require("./server");
const connectToDB = require("./modules/db/connect-db");
const { port, databaseUrl } = require("./configs/config");
const app = () => {
  startServer(port);
  connectToDB(databaseUrl);
};
module.exports = app;
