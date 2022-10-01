const http = require('http');
const fs = require('fs');

const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('page/home.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('page/about.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === '/create-file') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.writeFile('temp/create.html', '<h1>writing to test file</h1>', err => {
      if (err) throw err;
      res.write('file created');
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile('page/404.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

console.log(`Server is running on port ${PORT} as http://localhost:${PORT}`);
server.listen(PORT);
