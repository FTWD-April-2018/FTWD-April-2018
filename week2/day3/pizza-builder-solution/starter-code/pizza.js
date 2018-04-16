var pepli = "<li class='pep-price'>$1 pepperonni</li>"
var mushli = "<li class='mush-price'>$1 mushrooms</li>"
var greenli = "<li class='green-price'>$1 green peppers</li>"
var sauceli = "<li class='sauce-price'>$3 white sauce</li>"
var glutenli = "<li class='gluten-price'>$5 gluten-free crust</li>"
function setDefaults(){
  var price = 10;
  $(".btn").removeClass("active");
  $(".green-pepper").hide();
  $(".pep").hide();
  $(".mushroom").hide();
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $("strong").text("$"+price);
  $(".itemized").empty();
}
function calculateTotalPrice(){
  var price = 10;
  var indyPrices = $(".itemized li");
  for(var i = 0; i < indyPrices.length; i++){
    price +=parseInt(indyPrices.eq(i).text()[1])
  }
    $("strong").text("$"+price);
}
$(document).ready(function(){
  setDefaults();
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".itemized").append(greenli);
    }else{
      $(".green-price").remove();
    }
    calculateTotalPrice();
  });
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".itemized").append(pepli);
    }else{
      $(".pep-price").remove();
    }
    calculateTotalPrice();
  });
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".itemized").append(mushli);
    }else{
      $(".mush-price").remove();
    }
    calculateTotalPrice();
  });
  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".itemized").append(sauceli);
    }else{
      $(".sauce-price").remove();
    }
    calculateTotalPrice();
  });
  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".itemized").append(glutenli);
    }else{
      $(".gluten-price").remove();
    }
    calculateTotalPrice();
  });
//document.ready closes here
});
