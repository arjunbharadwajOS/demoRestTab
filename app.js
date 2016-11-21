var express = require('express');
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var app = express();
var resultarray = new Array();
var result = "";

app.get('/nodejs', function (req, res) {
  res.send('Nodejs Sample Hi App!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

