const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const connectDB = require('./database/db');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
