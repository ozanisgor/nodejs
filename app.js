const http = require('http');
const fs = require('fs');
const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
