$(document).ready(function(){

$('#fetch-all').click(function(){
  //this route equates to http://localhost:300/api/characters
  axios.get('/api/characters')
  .then((responseFromApi)=>{
    $('.characters-container').empty(); //clear out the old data before appending new data
    responseFromApi.data.forEach((eachCharacter)=>{

      $('.characters-container').append(`
          <div class="character-info">
          <div class="name">Name: ${eachCharacter.name}</div>
          <div class="occupation">Occupation: ${eachCharacter.occupation}</div>
          <div class="cartoon">Cartoon: ${eachCharacter.cartoon}</div>
          <div class="weapon">Weapon: ${eachCharacter.weapon}</div>
          <div class="theID">ID: ${eachCharacter._id}</div>
        </div>
        `)
    }); //end forEach
  })
  .catch((err)=>{
    console.log(err);
  });
}); //end fetch all click function


$('#fetch-one').click(function(){
  const theID = $('.character-id').val();
  if(!theID){
    console.log("must enter an ID for that to work");
     return ;
   }
  axios.get(`/api/characters/${theID}`)
  .then((response)=>{
    $('.characters-container').html(`
        <div class="character-info">
        <div class="name">Name: ${response.data.name}</div>
        <div class="occupation">Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Cartoon: ${response.data.cartoon}</div>
        <div class="weapon">Weapon: ${response.data.weapon}</div>
        <div class="theID">ID: ${response.data._id}</div>
      </div>
      `)
  })
  .catch((err)=>{
    console.log(err);
  });
});// end fetch-one click function



$('#new-character-form').submit(function(event){
  event.preventDefault();
  const charInfo = {};
  charInfo.theName = $('.new-name').val();
  charInfo.theOccupation = $('.new-occupation').val();
  charInfo.theWeapon = $('.new-weapon').val();
  if ($('.new-cartoon').is(':checked')) {
        charInfo.theCartoon = true;
      }else{
        charInfo.theCartoon = false;
      }
  axios.post('/api/characters/create', charInfo)
  .then((response)=>{
    console.log("success", response);
    $('#fetch-all').click();
  })
  .catch((err)=>{
    console.log(err)
  })
  $('.new-name').val("")
  $('.new-occupation').val("")
  $('.new-weapon').val("");
  $('.new-cartoon').prop('checked', false);
 });//end new char form submit function


 $('#edit-character-form').submit(function(e){
   e.preventDefault();
   const id = $('.edit-chr-id').val();
    const editCharInfo = {};
   editCharInfo.name = $('.edit-name').val();
   editCharInfo.occupation = $('.edit-occupation').val();
   editCharInfo.weapon = $('.edit-weapon').val();
   if ($('.edit-cartoon').is(':checked')) {
         editCharInfo.cartoon = true;
       }else{
         editCharInfo.cartoon = false;
       }
    axios.post(`/api/characters/update/${id}`,editCharInfo)
    .then((response)=>{
      console.log("success", response);
      $('.character-id').val(id);//manually typing in the id into the fetch-one input box
      $('#fetch-one').click(); //manually clicking the fetch-one button
      $('input').val(""); // clear out all the inputs
    })
    .catch((err)=>{
      console.log(err)
    })
    $('input').val(""); // clear out all the inputs
    $('.edit-cartoon').prop('checked', false);

 }); // end edit character submit function




});//end document ready
