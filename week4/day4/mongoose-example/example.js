const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp');
const Schema   = mongoose.Schema;

function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const catSchema = new Schema({
  name : {type: String, set: capitalize},
  color: String,
  age  : {type: Number, min:0, max:30}
  // trick: {type: String, default: 'sleep'}
});

const Cat = mongoose.model('Cat', catSchema);



// const Cat = mongoose.model('Cat', { name: String});
//
// const kitty = new Cat({ name: 'lowy mclowercase', color: 'spotted', age:7 });
// //
//
// kitty.save((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('meow');
//   }
// });
//
//you can combine the 2 steps above into 1 step with the .create method
//if you use .create, you do not need to run .save

// Cat.create({ name: 'Alice', color: 'green', age: 7 }, function (err, user) {
//   if (err) console.log('An error happened:', err);
//   else console.log('The user is saved and its value is: ', user);
// });


// Cat.findByIdAndUpdate("5ae1fe7f1f1ff95465d299d5", { name: "Uppy McUppercase" })
//   .then(cat => { console.log('new cat added') })
//   .catch(theError => { console.log(theError) })


// Cat.deleteOne({ name: "Lowy mclowercase"})
// .then(cat => { console.log('Terminated!') })
//   .catch(theError => { console.log(theError) })

// console.log('All the CATS!');

// app.get('/'{

// Cat.find({}, (err, cats) => {
  // cats is an array of Cat instances
  // cats.forEach((cat)=> {
  //   console.log(' --> cat: ', cat.name);
  // });
//   const allTheCats = {myList: cats};
// });
//
// res.render('index', allTheCats)
// })

// {{#each myList}} myList is the variable you have access to in your view
//because it is the name of the key in the object we are passing in const allTheCats object
