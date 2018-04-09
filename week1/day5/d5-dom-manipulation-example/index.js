
// var button = document.getElementById("add-item-button");
// var heading = document.getElementById("paragraph");
//
// button.onclick = function(){
//   console.log("adding an element to the list");
//   heading.style.backgroundColor= "blue";
// }


var button = document.getElementById("add-item-button");
var heading = document.getElementById("title");
var parent = document.getElementById("content");

button.onclick = function () {
  var secondHeading = document.createElement('h2');
  secondHeading.innerHTML = "This is another heading being added throuhg JS"
  parent.appendChild(secondHeading)
  // parent.removeChild(heading);
}




var dumbButtons = document.getElementsByClassName("dumb-button");


//this is what we are accomplishing with the for loop
// dumbButtons[0].onclick = function ()
// dumbButtons[1].onclick = function ()
// dumbButtons[2].onclick = function ()
for(var i =0; i < dumbButtons.length; i++){
  dumbButtons[i].onclick = function (blah) {
    console.log("hello")
    console.log(blah);
    // dumbButtons[0].style.backgroundColor = "purple"
    blah.currentTarget.style.backgroundColor = "purple"


  }
}
