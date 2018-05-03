const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const characterSchema = new Schema({
  name : String,
  occupation: String,
  weapon  :String,
  cartoon: Boolean
});

const Character = mongoose.model('Character', characterSchema);


module.exports = Character;
