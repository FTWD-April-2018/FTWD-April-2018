const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  imgPath: String,

}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

var User = mongoose.model("User", userSchema);
module.exports = User;
