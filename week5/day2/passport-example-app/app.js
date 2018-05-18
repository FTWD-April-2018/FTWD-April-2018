require('dotenv').config();

const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const express        = require('express');
const favicon        = require('serve-favicon');
const hbs            = require('hbs');
const mongoose       = require('mongoose');
const logger         = require('morgan');
const path           = require('path');
const User           = require('./models/user');
const Room           = require('./models/room');
const session        = require("express-session");
const bcrypt         = require("bcryptjs");
const passport       = require("passport");
const LocalStrategy  = require("passport-local").Strategy;
const app            = express();
const flash          = require("connect-flash");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const cors           = require('cors');



mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/passport-example-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(flash());

//passport config area
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));



passport.use(new GoogleStrategy({
  clientID: "client ID here",
  clientSecret: "client secret here",
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleID: profile.id }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    const newUser = new User({
      googleID: profile.id
    });

    newUser.save((err) => {
      if (err) {
        return done(err);
      }
      done(null, newUser);
    });
  });

}));
// end passport config area




app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


const index = require('./routes/index');
app.use('/', index);
const authRouteVariableThing = require('./routes/auth-routes')
app.use('/api', authRouteVariableThing);
const roomsRoutes = require('./routes/rooms-routes');
app.use('/', roomsRoutes);

module.exports = app;
