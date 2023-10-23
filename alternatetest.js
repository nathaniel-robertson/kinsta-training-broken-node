require('dotenv').config();
const http = require('http');

const port = process.env.PORT;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`This is console.log from the alternate test file`);
  console.error(`This is console.error from the alternate test file`);
});

