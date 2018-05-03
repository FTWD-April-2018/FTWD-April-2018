const express = require('express');
const router  = express.Router();
const Character = require('../models/character');

//this route will actually be /api/characters, see app.js for details
router.get('/characters', (req, res, next) => {
  Character.find()
  .then((theList)=>{
    res.json(theList)
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
}); // end /characters route

router.get('/characters/:id', (req, res, next)=>{
  Character.findById(req.params.id)
  .then((theCharacter)=>{
    res.json(theCharacter);
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});//end get /characters/:id



//remember, this route is /api/characters/create, see app.js for details
router.post('/characters/create', (req, res, next)=>{
  Character.create({
    name: req.body.theName,
    occupation: req.body.theOccupation,
    weapon: req.body.theWeapon,
    cartoon: req.body.theCartoon
  })
  .then((theCharacter)=>{
    res.json(theCharacter);
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  })
}); //end post /characters/create route


router.post('/characters/update/:id', (req, res, next) =>{
  // req.body will look like this
  //   {name: "spiderman",
  //    occupation: "superhero",
  //     weapon: "web",
  //      cartoon: false  }
  // so this is why we can simply pass req.body as the second argument
  //                                       |
  //                                       -----
  //                                            |
  Character.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedCharacter)=>{
    res.json(updatedCharacter);
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  })


});//end post characters/update/:id route







module.exports = router;
