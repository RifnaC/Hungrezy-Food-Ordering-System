const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 60,
  },
  isAdmin: {
    type: String,
    default: false,
  },
});
module.exports = mongoose.model("User", UserSchema);
