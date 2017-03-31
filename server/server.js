var path = require('path');
var express = require('express');
var app = require('express')();
const port = process.env.PORT || 4000;


const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.get('/', function (req, res) {
  res.send('the app is working fine')
})

app.listen(port, function () {
  console.log('Server is running on', port);
})
