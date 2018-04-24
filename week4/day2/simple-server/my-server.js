const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    }
    else if (request.url === '/about') {
      response.write('My name is Izzy');
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

server.listen(3000);
