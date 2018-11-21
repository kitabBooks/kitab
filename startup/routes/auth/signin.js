// routes/auth-routes.js
const express = require('express');

const authRoutes = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../../models/users');

// const ensureLogin = require('connect-ensure-login');
// const User = require('../../models/users');
authRoutes.get('/users/signin', (req, res, next) => {
  res.render('login', { user: req.user });
});
authRoutes.post('/users/signin', passport.authenticate('local', {

  successRedirect: '/dashboard',
  failureRedirect: 'signin',
  failureFlash: true,
  passReqToCallback: true,

}));

authRoutes.get('/users/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// authRoutes.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render('private', { user: req.user });
// });
module.exports = authRoutes;
