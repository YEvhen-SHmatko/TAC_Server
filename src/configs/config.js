const dbUser = "yshmatko";
const dbPassword = "Z1dgmy0kd1";
const URL = "http://localhost:3000";
const config = {
  port: process.env.PORT || 3001,
  dbUser,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-iwbez.mongodb.net/time-analytic-control`,
  secret: "secret-key",
  smtp: {
    user: "tac-app@meta.ua",
    password: "B1gth0ny",
    host: "smtp.meta.ua",
    port: 465,
    ssl: true,
  },
  URL,
  routes: {
    confirm: "/auth/confirm",
  },
};

module.exports = config;
