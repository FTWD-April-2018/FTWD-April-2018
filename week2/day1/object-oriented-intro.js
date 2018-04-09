// This is to create one single car the old-fashioned way
//you will have to re-write this same block of code for each car object if they are created this way
var car = {
  name: 'Knight Industries Two Thousand',
  isOn: false,

  sayMyName: function() {
    console.log("My name is " + this.name);
  },
  start: function(){
    this.isOn = true;
  },
  stop: function(){
    this.isOn = false;
  }
}
// console.log(car.isOn);
// car.start();
// console.log(car.isOn);

//The NEW, BETTER way (using constructors)

function Car(name, arbitraryColor, interiorMaterial, doesItHaveASunRoof){
//              ^         ^              ^                   ^
//              |         |              |                   |
  this.name = name;//     |              |                   |
  this.color = arbitraryColor;//  --------                   |
  //                             |          ____________------
       this.material = interiorMaterial;// |
      //                                   |
                this.sunRoof = doesItHaveASunRoof;

  this.isOn = false;

  this.sayMyName = function() {
    console.log("My name is " + this.name);
  },
    this.start = function(){
      console.log("starting the engine");
      this.isOn = true;
    },
    this.stop = function(){
      this.isOn = false;
    }
}

Car.prototype.honkTheHorn = function(){
  console.log("beep, beep");
}



var myCar = new Car("Honda Civic", "black", "cloth", true);
// myCar.sayMyName();
console.log(myCar);
myCar.honkTheHorn();
// car.sayMyName();



function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (name, owner){
  this.name = name;
  this.owner = owner;
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");

console.log(myAnimal.name);    // Arya
console.log(myDog.name);




function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (blah, bleh){
  Animal.call(this, blah, bleh);
  // this.name = whatever the rules are for Animal.name
  // this.owner = whatever the rules are for Animal.owner
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
//the first line is to make your program smaller(and faster), without this line, you are
//duplicating memory usage, storing seperate constructor functions for dog vs animal,
// add this line to make dog's constructor function include part of the animal constructor
//the second line will prevent some unwanted consequences of the first line

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");
