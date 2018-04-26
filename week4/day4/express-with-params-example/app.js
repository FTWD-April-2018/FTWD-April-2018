// app.js
const express = require('express')
const app     = express()
const hbs     = require('hbs')
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req)
})

app.get('/users/:username', function (req, res) {
  let theUserName = req.params.username;
  // let theUser = User.find({username: theUserName})   this is how we will query the database
  let data = {theActualUserName: theUserName }
  res.render('userpage', data)
})


app.get('/search', function (req, res) {
  res.send(req.query)
})






app.listen(3000, () => console.log('Example app listening on port 3000!'))
