var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  app = express(),
  port = 9010;

var Lift = require('./schemas/liftSchema.js');

mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/fitness-guide");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB")
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/api/lifts', function(req, res) {
  var lift = new Lift(req.body);
  lift.save(function(err, s) {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.send(s);
    }
  });
});

app.get('/api/lifts', function(req,res) {
  var query;
  if (req.query.status) {
    query = {status: req.query.status}
  } else {
    query = {};
  }
  Lift.find(query, function(err, s) {
    return res.send(s);
  });
});
app.delete('/api/lifts', function(req, res) {
  Lift.findByIdAndRemove(req.query.id, function(err, response) {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.send('Success');
    }
  })
})
app.purge('/api/lifts', function(req, res) {
  res.send('Mm k');
})

app.listen(port, function() {
  console.log('Listening in on', port);
})
