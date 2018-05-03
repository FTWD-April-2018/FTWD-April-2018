const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const pictureSchema = new Schema({
  name: String,
  path: String,
  originalName: String

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;
