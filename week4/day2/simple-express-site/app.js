const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

app.use(express.static('public'));

// if request.url == "/"
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// cat route:
app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html');
});




app.get('/about', (req, res, next) => {
  console.log(req);
  res.send(`
    <h1>About</h1>
    <h3> This is the about page </h3>
    `);
});
