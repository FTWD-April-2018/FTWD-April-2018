const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RoomSchema = Schema({
  name:  String,
  desc:  String,
  owner: Schema.Types.ObjectId
});


const Room = mongoose.model("Room", RoomSchema);






module.exports = Room;
