//basic forEach loop
var myArray = [1,2,3,4,5,6,7,8,9,10];
//theNumber is our placeholder, first time through it will equal to 1, then equal to 2, and so on
myArray.forEach(function(theNumber){
// console.log(theNumber);
});


//use a forEach loop to increase the value of each element in the array by 1
var plusOneArray = [];
myArray.forEach(function(aNumber){
  plusOneArray.push(aNumber+1);
})
// console.log(plusOneArray);
//--------------------------------------------------------------------
// Map Method
var mappedArray = myArray.map(function(theNumber){
return theNumber+3;
});
// console.log(mappedArray);


var cities = ["miami", "barcelona", "madrid"];

var capsCities = cities.map(function(city){
    return city[0].toUpperCase() + city.slice(1);
})


// console.log(capsCities);
// ["Miami", "Barcelona", "Madrid"]
//--------------------------------------------------------------------
// Reduce Method


// Getting the total of an array with a regular old forEach loop
var statsArray = [10,12,9,7,22,109];
var sum = 0;
statsArray.forEach(function(theNumber){
  sum+= theNumber;
});

// console.log("the sum is ", sum);


// To get the total of an array with a reduce method
var reducedSum = statsArray.reduce(function(theInitial, theNumber){
    return theInitial+theNumber;
});


var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];


var totalAge = people.reduce(function(initial, number){
  // console.log("initial value", initial)
  return initial + number.age;
},0);

//--------------------------------------------------------------------
// Filter Method
//filtering an array a regular old forEach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];
numbers.forEach(function(eachNumber){
  if(eachNumber % 2 === 0 ){
    evenNumbers.push(eachNumber);
  }
});


//filtering an array with the filter method
var evens = numbers.filter(function(number){
  return number % 2 === 0;
});

var bunchOfPeople = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

var atLeastTwentyOne = bunchOfPeople.filter(function(person){
  return person.age >= 21
})

// console.log(atLeastTwentyOne);



var numerals = [1, 60, 112, 123, 100, 99, 73, 41, 27];

var oddLessFortyTwo = numerals.filter(function(number){
  return number % 2 !==0 && number < 42
});

// console.log(oddLessFortyTwo);



//--------------------------------------------------------------------
// Sort Method
//sorting an array a regular old forEach
var sortedNumerals = [];
var smallest = numerals[0]
numerals.forEach(function(number, index){
  if(index ===0){}
  if(number > smallest){
    sortedNumerals.push(number)
  }else if(number <= smallest){
    sortedNumerals.shift(number)
  }
});


var words = ["Cat", "dog", "banana", "String", "skyscraper", "nefarious"]
// console.log(words.sort());
// console.log(words.sort().reverse())

var appropriatelySortedWords = words.sort(function(a,b){
  if (a.toUpperCase() > b.toUpperCase()){
    return 1
  }  else if (b.toUpperCase() > a.toUpperCase()){
    return -1
  } else {return 0}
});

console.log(appropriatelySortedWords);

// console.log(appropriatelySortedWords)



//sorting an array a sort method
var appropriatelySorted = numerals.sort(function(a,b) {
  return a - b;
});

// console.log(appropriatelySorted);


let bootcamps = ["Miami", "Paris", "Barcelona", "Madrid", "México"]


//--------------------------------------------------------------------
// Splice Method


bootcamps.splice(1,3, "Berlin")


// console.log(bootcamps);
