

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"}

var drOrchid =  {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"}


// Weapons Collection
var weaponsArray = [
{name: "rope", weight: 10},
{name: "knife", weight: 8},
{name: "candlestick",  weight: 2}
]

// Rooms' Collection
var roomsArray = [
  {name: "Dinning Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"}
];



// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum);



function randomSelector(theArray){
  var item = theArray[Math.floor(Math.random()*theArray.length)];
  return item;
}

function pickMistery(){
  var misteryEnvelope = [];
  var randomCharacter =  randomSelector(charactersArray);
  misteryEnvelope.push(randomCharacter);
  var randomWeapon =  randomSelector(weaponsArray);
  misteryEnvelope.push(randomWeapon);
  var randomRoom =  randomSelector(roomsArray);
  misteryEnvelope.push(randomRoom);
  return misteryEnvelope;
}

function revealMistery(arrayFullOfThreeObjects){
  return arrayFullOfThreeObjects[0].first_name + " " + arrayFullOfThreeObjects[0].last_name +
 " killed Mr.Boddy using the " + arrayFullOfThreeObjects[1].name +
 " in the " + arrayFullOfThreeObjects[2].name+"!!!";
}

// <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!


// console.log(roomsArray);
// console.log(weaponsArray);
// console.log(charactersArray);

var theMistery = pickMistery();
console.log(revealMistery(theMistery));
