const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const bcrypt  = require('bcrypt');
const saltRounds = 10;


router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});//end get /signup route

 router.post('/signup', (req, res, next)=>{
   const username = req.body.username;
   const password = req.body.password;

   if(username ===""||password===""){
     res.render('auth/signup', {
       message: `Missing Credentials.
       Please enter a username and password in order to sign up`
     })
     return;
   };

   User.findOne({username:username})
   .then((user)=>{
     if(user !== null){
     res.render('auth/signup', {message:`
       Sorry, that username already exists.
       Please login if you already have an account.`
     })
       return;
     }// end the if statement


   const salt = bcrypt.genSaltSync(saltRounds);
   const hashPass = bcrypt.hashSync(password, salt);

   User.create({username:username, password: hashPass})
   .then((theUser)=>{
     res.redirect('/')
   })
   .catch((err)=>{
     console.log(err);
     next(err);
   })

 })//end the .then promise for user.findOne query
   .catch((err)=>{
     console.log(err);
     next(err);
   })
 });//end post /signup route







module.exports = router;
