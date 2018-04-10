$(document).ready(function() {


// $(".theButton").click(function(){
//   if($(this).hasClass("blue")){
//       $(this).removeClass("blue");
//       $(this).addClass("red");
//   }else{
//     $(this).removeClass("red");
//     $(this).addClass("blue");
//   }
  // ^ this is my own toggleClass method
  // fortunately, this happens often enough that JQuery has a function for this
$(".theButton").click(function(){
  var myNewHtmlElement = $('.myInput').val();

  $("#my-ul").append("<li>" + myNewHtmlElement + "</li>");


  $(this).toggleClass("blue");
  $(this).toggleClass("red");

});


});
