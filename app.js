const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
