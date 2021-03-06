const createError = require('http-errors');
const session = require('express-session');
const express = require('express');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const ensureLogin = require('connect-ensure-login');
const logger = require('morgan');
const hbs = require('hbs');
const flash = require('connect-flash');
const MongooseStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const loggedRoute = require('./routes/auth/dashboard');
const authRoutes = require('./routes/auth/signup');
const indexRouter = require('./routes/index');
const loginRoute = require('./routes/auth/signin');
const editRoute = require('./routes/auth/profileEdit');
const bookRouter = require('./routes/books');
const dashboardRoute = require('./routes/auth/dashboard');
const AboutRouter = require('./routes/about');

const app = express();
// passport
app.use(flash());
app.use(
  session({
    secret: 'our-passport-local-strategy-app',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: new MongooseStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60,
    }),
  }),
);
require('./rules/passport')(app);

// Mongoose conection

mongoose
  .connect(
    'mongodb://localhost/kitab',
    { useNewUrlParser: true },
  )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const appName = require('./package.json').name;
const debug = require('debug')(
  `${appName}:${path.basename(__filename).split('.')[0]}`,
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.use('/', loggedRoute);
app.use('/', authRoutes);
app.use('/', indexRouter);
app.use('/', bookRouter);
app.use('/', loginRoute);
app.use('/', dashboardRoute);
app.use('/', editRoute);
app.use('/', AboutRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// passport

app.use(
  session({
    secret: 'our-passport-local-strategy-app',
    resave: true,
    saveUninitialized: true,
  }),
);


app.use(passport.initialize());

module.exports = app;
