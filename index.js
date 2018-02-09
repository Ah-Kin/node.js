//loading dependencies
var express = require('express');
var app = express();

//the four methods: GET,POST,PUT/PATCH,DELETE
app.get('/', function(request, response) {
  response.send({ message: "everything is ok." });
});
//to stop the server i need to press in terminal
//CTRL + C
console.log("listening on port 3000");
//http://localhost:3000
app.listen(3000);
