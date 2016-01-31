var express = require('express');
var port    = process.argv[2];
var fs      = require('fs');
var app     = express();

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if(err) {
            throw err;
        }
      var books = JSON.parse(data);
      res.json(books);
    })
})

app.listen(port);

