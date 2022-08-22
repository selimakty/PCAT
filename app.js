const express = require('express');
const path = require('path');

const app = express();

const myLogger = (req, res, next) => {
  console.log('test1');
  next();
};

//middlewares
app.use(express.static('public'));
app.use(myLogger);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatildi...`);
});
