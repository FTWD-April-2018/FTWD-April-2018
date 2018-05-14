const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const multer = require('multer');

const cloudinary = require('cloudinary');
const uploadCloud = require('../config/cloudinary')

/* GET home page */
router.get('/', (req, res, next) => {
  User.find()
  .then((allUsers)=>{

    res.render('index', {users: allUsers});
  })
  .catch((err)=>{
    console.log(err)
  })

});



router.post('/create', uploadCloud.single('photo'), function(req, res) {
  // console.log(req.file);
    User.create({
      username: req.body.username,
      password: req.body.password,
      imgPath: req.file.url
    })
    .then((theUser)=>{
      res.redirect('/')
    })
});


module.exports = router;
