var myObject = {
  athletics100Men: "Justin Gatlin"
}

// console.log('first version', myObject);

myObject = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel"
}

// console.log('initial state', myObject);
// console.log("--------------")


// var myArray = [1,2,3,4,5]

// console.log(myArray[3])



// Object.values(myObject);







// console.log(myObject["athletics100Men"])


// console.log(myObject.athletics100Men)

// myObject.swimming200Men = "Michael Phelps"

// console.log( myObject);
// console.log("--------------")

myObject.athletics100Men = "Usain Bolt"
// myObject['athletics100Men'] = "Usain Bolt"

// console.log( myObject);
// console.log("--------------")
myObject.doubleOllie = "Chris Chann"

// console.log( myObject);


// myObject.doubleOllie = ""  doesnt delete the key 
// delete myObject.doubleOllie;

// console.log("--------------")
// console.log( myObject);

var arrayOfKeys = Object.keys(myObject);

arrayOfKeys.forEach(function(eachKey){
  
  console.log(eachKey,"------",myObject[eachKey]);
});




// theUser = {
//   email: 'nickborbe@gmail.com',
//   age: 26,
//   address: "117 NE 11th Terrace",
//   amazonPrime: true,
//   lastPAgeVisited: "",
//   name: 'Gustavo'
// };

// console.log("Hello " + theUser.name);

// if(theUser.amazonPrime){
//   console.log("free 2 day shipping available")
// }else{
//   console.log("Sorry, you need to sign up for Amazon prime to be eligible for free 2 day shipping");
// }

// theUser.amazonPrime = false
// console.log("----------after account deactivated---------")

// if(theUser.amazonPrime){
//   console.log("free 2 day shipping available")
// }else{
//   console.log("Sorry, you need to sign up for Amazon prime to be eligible for free 2 day shipping");
// }













