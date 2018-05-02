$(document).ready(function(){



$('.submit-button').click(function(){
   const whichPoke = $('.which-poke').val();


  axios({
    method: "GET",
    url: `https://www.pokeapi.co/api/v2/pokemon/${whichPoke}`
  })
  .then(theThingWeGetBackFromApi => {
    console.log(theThingWeGetBackFromApi.data)
    $('.pokeinfo').append(`
      <h3> Name: ${theThingWeGetBackFromApi.data.name}</h3>
      <h4> Height: ${theThingWeGetBackFromApi.data.height}</h4>
      <h4> Weight: ${theThingWeGetBackFromApi.data.weight}</h4>
      `)

  })
  .catch(err => {
    console.log(err);
  })
})// end poke button click function



$('.characters-button').click(function(){

  axios.get(`https://ih-crud-api.herokuapp.com/characters/`)
  .then(response => {
    $('.iron-characters').empty();
    response.data.forEach(function(oneCharacter){
      $('.iron-characters').append(`
          <h3>Name: ${oneCharacter.name}</h3>
          <p> Occupation: ${oneCharacter.occupation} </p>
          <p> Weapon: ${oneCharacter.weapon} </p>
          <p> Debt: ${oneCharacter.debt} </p>
        `)
    })
  })
  .catch(err => {
      console.log(err);
  })
}) //end click function



$('.new-char-button').click(function(){
  const charInfo = {
    name: $('.char-name').val(),
    occupation: $('.char-occ').val(),
    weapon: $('.char-weapon').val()
  }

  axios.post(`https://ih-crud-api.herokuapp.com/characters/`, charInfo)
  .then(response => {
      console.log("character successfully created", response)
  })
  .catch(err => {
    console.log(err)
  })


}) //end new char click


$('.char-edit-button').click(function(){
  const whichCharacter = $('.which-character').val()
  const charInfo = {
    name: $('.char-name').val(),
    occupation: $('.char-occ').val(),
    weapon: $('.char-weapon').val()
  }

  axios.put(`https://ih-crud-api.herokuapp.com/characters/${whichCharacter}`, charInfo)
  .then(response => {
    console.log("success", response)
  })
  .catch(error =>{
    console.log(error);
  })
}); // end edit click function


$('.which-character').change(function(){
  const whichCharacter = $('.which-character').val();
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${whichCharacter}`)
  .then(response => {
    // console.log(response.data)
    $('.char-name').val(response.data.name);
    $('.char-occ').val(response.data.occupation);
    $('.char-weapon').val(response.data.weapon);
  })
  .catch(err =>{
    console.log(err)
  })



})

















}); // end document ready
