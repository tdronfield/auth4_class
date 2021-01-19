const http = require('http');
// like a PHP require
// require is more or less the same as a JS import 

// node is smart enough to recognize we are using localhost
// const hostname = '127.0.0.1'; // localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});