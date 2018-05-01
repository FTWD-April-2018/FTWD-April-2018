const express     = require("express");
const router      = express.Router();
const passport    = require("passport");
const User        = require("../models/user");
const Room        = require("../models/room");
const flash       = require("connect-flash");


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {

    res.redirect('/login')
  }
}


router.get('/rooms/new', (req, res, next) => {
  res.render('rooms/new')
});


router.post('/rooms/create', ensureAuthenticated, (req, res, next) => {
  const newRoom = new Room ({
    name:  req.body.roomName,
    desc:  req.body.roomDescription,
    owner: req.user._id   // <-- we add the user ID
  });

  newRoom.save ((err) => {
    if (err) { return next(err); }
    else {
      res.redirect('/rooms');
    }
  })
});


router.get('/rooms', ensureAuthenticated, (req, res, next) => {

  Room.find({owner: req.user._id}, (err, myRooms) => {
    if (err) { return next(err); }

    res.render('rooms/index', { rooms: myRooms });
  });

});




module.exports = router;
