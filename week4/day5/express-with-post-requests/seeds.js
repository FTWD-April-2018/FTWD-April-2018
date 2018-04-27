const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
mongoose.connect('mongodb://localhost/cars');

const carSchema = new Schema({
  brand : String,
  model: String,
  year  : {type:String},
  color: String
});

const Car = mongoose.model('Car', carSchema);



const carsArray = [
  {  brand : "Volkswagon",
    model: "Beetle",
    year  : "1982",
    color: "Blue"
  },
  {  brand : "Ford",
    model: "Focus",
    year  : "2007",
    color: "Green"
  },
  {  brand : "Chevy",
    model: "Corvette",
    year  : "2010",
    color: "Red"
  }

]

Car.create(carsArray, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${carsArray.length} cars`)
  mongoose.connection.close()
});
