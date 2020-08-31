const express = require('express');
const router = require('./routing');
const path = require('path');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.set('json spaces', 4);

app.use(internalServerError);

app.use(notFound)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});