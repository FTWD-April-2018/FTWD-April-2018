const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  googleID: String,
  role: {
  type: String,
  enum : ['GUEST', 'EDITOR', 'ADMIN'],
  default : 'GUEST'
}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
