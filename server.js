var express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  passport = require('passport'),
  hash = require('bcrypt-nodejs'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  localStrategy = require('passport-local').Strategy,
  app = express();
  port = process.env.PORT || 9010;

var Password = require('./app/models/passwordModel.js');
var UserLift = require('./app/models/userLifts.js');
var newUserLift = require('./app/schemas/userLiftSchema.js');
var Lift = require('./app/models/liftSchema.js');
var User = require('./app/models/userSchema.js');
require('./config/passport')(passport);

mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://generaluser:tantan@ds019633.mlab.com:19633/heroku_xgk7dd4g');
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB")
})

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
    secret: 'imasdfjlkjflds123tannio90',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
}

app.get('/user/lifts/user', function(req, res) {
  User.findOne({ username: req.query.username })
  .populate('templateLifts').exec(function(err, user) {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(user);
    }
  })
})
app.delete('/secret', function(req, res) {
  Password.findByIdAndRemove(req.query.id, function(err, s) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(s);
    }
  })
})
app.post('/secret', function(req, res) {
  var password = new Password(req.body);
  password.save(function(err, s) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(s);
    }
  });
});
app.get('/secret', function(req, res) {
  Password.find(function(err, s) {
    if (err) {
      return res.status(500).json(err);
    } else {
      res.status(200).json(s);
    }
  })
})
app.get('/user/lifts', function(req, res) {
  UserLift.find(function(err, s) {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json(s);
    }
  })
})
app.post('/user/lifts', function(req, res) {
  var userLift = new UserLift(req.body);
  userLift.save(function(err, s) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(s);
    }
  });
});
app.delete('/user/lifts', function(req, res) {
  UserLift.findByIdAndRemove(req.query.id, function(err, s) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Success');
    };
  });
});
app.get('/user', function(req, res) {
  User.find(function(err, s) {
    if (err) {
      return res.status(200).send(err);
    } else {
      return res.send(s);
    }
  });
});
app.delete('/user', function(req, res) {
  User.findByIdAndRemove(req.query.id, function(err, response) {
    if (err) {
      return res.status(200).send(err);
    } else {
      return res.status('Success');
    }
  })
})
app.delete('user/lift', function(req, res) {
  User.findByIdAndRemove(req.query.id, req.body, function(err, response) {
    if (err) {
      return res.status(200).json(err);
    } else {
      return res.json(response);
    }
  })
})
app.post('/user/register', function(req, res) {
  User.register(new User({ username: req.body.username, password: req.body.password }),
  req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});
app.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!',
        user: user
      })
    });
  })(req, res, next);
});
app.get('/user/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});
app.get('/user/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});
app.put('/user', function(req, res) {
  User.findByIdAndUpdate(req.query.id, req.body, function(err, response) {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(response);
    }
  })
})
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
app.get('api/lift', function(req, res) {
  Lift.find(req.query.name, function(err, s) {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.status(200).json(s);
    }
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


app.listen(port, function() {
  console.log('Listening in on', port);
})
