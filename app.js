const express = require('express');

const path = require('path');
const server = express();

// set our views directory
server.set("views", path.join(__dirname, 'views'));

// set our static assets folder
// public is used for css,JS, images etc - anything that is static.
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
  console.log('you have hit the home route');
  res.sendFile(path.join(__dirname, 'views/index.html')); //localhost/views/index.html - you don't see this
})

server.get("/contact", (req, res) => {
  console.log('hit the contact page');
  res.send('contact');
})

const port = process.env.PORT || 3000; // localhost:3000

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});