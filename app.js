const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add');
});
app.get('/photo', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('photo');
});




const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatildi...`);
});
