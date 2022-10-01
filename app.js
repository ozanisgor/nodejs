const http = require('http');
const fs = require('fs');
const express = require('express');
const routes = require('./routes/index');
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
