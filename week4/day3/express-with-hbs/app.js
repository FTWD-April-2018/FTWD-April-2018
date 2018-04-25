var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');





app.get('/', (req, res, next) => {
  const randomNumber = Math.floor(Math.random()*10)
  const jackpot = randomNumber >= 5;
  let data = {
  name: "Class",
  bootcamp: "IronHack WebDev",
  random: randomNumber,
  address: {
      street: "8th Street",
      number: 120
    },
  weHaveAWinner: jackpot,
  cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
};
  res.render('index', data);
});

app.get('/about', (req, res, next) => {
  res.render('about');
});


app.listen(3000);
