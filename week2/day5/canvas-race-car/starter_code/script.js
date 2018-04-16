window.onload = function() {
var currentGame;
var canStart = true;



var Car = function(){
  this.x = 240;      // ------------------------------------|
  this.y = 600;      // ------------------------------------|
  this.width = 50;  // -------------------------------------|
  this.height = 85; // -------------------------------------|
  this.img = 'images/car.png';  //                          |
  //                  |                                     |
  //                  |                                     |
}//                   |                                     |
//                     ------------------                   |
Car.prototype.drawCar = function(){ //   |                  |
  var theImage = new Image();  //        |                  |
  theImage.src = this.img; //-------------                  |
  //                          ________________________________
  //                          |     |           |           |
  ctx.drawImage(theImage, this.x, this.y, this.width, this.height)

}

Car.prototype.move = function(magicalNumber){
  ctx.clearRect(this.x,this.y,this.width,this.height);
  switch(magicalNumber) {
    case 37:
    if(this.canMove(this.x-5, this.y)){
      this.x -= 5;
    }
        break;
    case 38:
    if(this.canMove(this.x,this.y-5)){
      this.y -=5;
    }
        break;
    case 39:
    if(this.canMove(this.x+5, this.y)){
      this.x +=5;
    }
        break;
    case 40:
    if(this.canMove(this.x,this.y+5)){
      this.y+=5;
    }
        break;
    default:
        console.log("oops");
}
    this.drawCar();
}



Car.prototype.canMove = function(futureX,futureY){
  var canIMove = true;
currentGame.obstacles.forEach(function(theObstacle){
  if(   (futureX >= theObstacle.x && futureX <= theObstacle.x+theObstacle.width) &&
  (futureY >= theObstacle.y && futureY <= theObstacle.y+theObstacle.height)     ){
    canIMove = false;
    console.log("ouch");
  }
});
  return canIMove;
}




var Obstacle = function(x,y,width,height){
  //                    | |    |     |
  this.x = x;// --------- |    |     |
  this.y = y; // ---------     |     |
  this.width = width; // ------      |
  this.height = height;// ------------
}

Obstacle.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height)
}



  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext('2d');
  document.getElementById("start-button").onclick = function() {

    startGame();
  };

  function startGame() {
    if(canStart){
    currentGame = new Game();
    var theCar = new Car();
    currentGame.car = theCar;
    currentGame.car.drawCar();
    var leftWall = new Obstacle(0, 0, 30, 700);
    var rightWall = new Obstacle(470, 0, 30, 700);
    currentGame.obstacles.push(leftWall, rightWall);
    currentGame.obstacles.forEach(function(oneObstacle){
      oneObstacle.draw();
    })
    canStart = false;
    }
  }

  document.onkeydown = function(event) { // doesn't have to be "e"
  if (event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40){
    event.preventDefault();
  }
      var directionCode = event.which;
      currentGame.car.move(directionCode);
  };




};



// Car.prototype.canMove = function(x,y){
//   var canMove = true;
//   currentGame.obstacles.forEach(function(obstacle){
//     if((x >= obstacle.x && x <= obstacle.x+obstacle.width) && (y >= obstacle.y && y <= obstacle.y+obstacle.height)){
//       canMove = false;
//     }
//   });
//   return canMove;
// }
