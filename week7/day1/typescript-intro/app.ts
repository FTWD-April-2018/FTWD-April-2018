// function notCrashed(target) {
//   target.prototype.crashedYet = false;
// }



interface Vehicle {
   doors: number;
   wheels:  number;
   seats:  number;
   // crashedYet: boolean;
   isMotorBike(): boolean;
}


// @notCrashed
// decorator refernces the function we defined at the top of the file
//it sets crashedYet equal to false for any class you add it to
class Car implements Vehicle {
  model: string;

  constructor(
    public doors: number,
    public wheels: number,
    public seats: number

  ) {}

  isMotorBike():boolean {
    return (this.wheels === 2);
  }

  setModel(model):void {
    this.model = model;
  }
}

let car = new Car(2, 4, 2);
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
