var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  app = express(),
  port = 9010;

mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/fitness-guide");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB")
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());



app.listen(port, function() {
  console.log('Listening in on', port);
})
