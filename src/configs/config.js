const dbUser = "yshmatko";
const dbPassword = "Z1dgmy0kd1";

const config = {
  port: 3001,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-1xzc3.mongodb.net/marketplace`,
  secret: "secret-key",
};

module.exports = config;
