const mongoose = require("mongoose");

const connectToDB = dbUrl => {
  mongoose
    .connect(dbUrl, { useFindAndModify: false, useNewUrlParser: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch(err => {
      console.error("Database connection error");
    });
};

module.exports = connectToDB;
