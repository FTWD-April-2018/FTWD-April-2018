var Car = /** @class */ (function () {
    function Car(doors, wheels, seats) {
        this.doors = doors;
        this.wheels = wheels;
        this.seats = seats;
    }
    Car.prototype.isMotorBike = function () {
        return (this.wheels === 2);
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    return Car;
}());
var car = new Car(2, 4, 2);
car.setModel("Nissan GTR");
// -----------------------------------------
// let blah:Array<number> = [];
//specify blah will be an array with numbers inside
// blah.push(25)
//lets me push in the number
// blah.push("hello");
//error when pushing in a string because we declared the array would only accept numbers
//
// console.log(blah)
// function saySomething(blah:string):number{
//  blah:string means the argument we receive should be a string
//:number means the return value of this funciton should be a number
//   return 25;
// }
// saySomething("hello");
