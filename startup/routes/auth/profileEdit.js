const express = require('express');
const ensureLogin = require('connect-ensure-login');

const editRoute = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../../models/users');

const bcryptSalt = 10;

editRoute.get(
  '/profile',
  ensureLogin.ensureLoggedIn({
    baseUrl: '/',
    redirectTo: '/users/signin',
  }),
  (req, res, next) => {
    // res.send(req.user.name)
    res.render('usersprofile', {
      user: req.user,
    });
  },
);
editRoute.post(
  '/profile',
  ensureLogin.ensureLoggedIn({
    baseUrl: '/',
    redirectTo: '/users/signin',
  }),
  (req, res, next) => {
    const userId = req.user._id;
    const userInfo = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password === '' ? null : req.body.password,
      zip: req.body.zip,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
    };
    if (userInfo.password !== null) {
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashedPass = bcrypt.hashSync(userInfo.password, salt);

      User.findByIdAndUpdate(
        userId,
        {
          name: userInfo.name,
          username: userInfo.username,
          password: hashedPass,
          address: {
            city: userInfo.city,
            street: userInfo.street,
            state: userInfo.state,
          },
        },
        (err, theUser) => {
          if (err) {
            next(err);
            return;
          }
          req.user = theUser;
          res.redirect('/dashboard');
        },
      );
    } else {
      User.findByIdAndUpdate(
        userId,
        {
          name: userInfo.name,
          username: userInfo.username,
          address: {
            city: userInfo.city,
            street: userInfo.street,
            state: userInfo.state,
          },
        },
        (err, theUser) => {
          if (err) {
            next(err);
            return;
          }
          req.user = theUser;
          res.redirect('/dashboard');
        },
      );
    }
  },
);

module.exports = editRoute;
