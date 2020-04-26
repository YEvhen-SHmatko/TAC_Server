const { Schema, model } = require("mongoose");
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // telephone: {
  //   type: String,
  //   unique: true,
  // },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array,
});

userSchema.plugin(timestamp);

module.exports = model("User", userSchema);
