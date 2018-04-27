const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const carSchema = new Schema({
  brand : String,
  model: String,
  year  : {type:String},
  color: String
});

const Car = mongoose.model('Car', carSchema);


module.exports = Car;
