const express = require('express');
const ensureLogin = require('connect-ensure-login');
const editRoute = express.Router();
const passport = require('passport');
const User = require('../../models/users');

editRoute.get('/profile', ensureLogin.ensureLoggedIn({
  baseUrl: '/',
  redirectTo: '/users/signin',
}), (req, res, next) => {
  // res.send(req.user.name)
  res.render('usersprofile', {
    user: req.user,
  });
});
editRoute.post('/profile', ensureLogin.ensureLoggedIn({
  baseUrl: '/',
  redirectTo: '/users/signin',
}), (req, res, next) => {
  const userId = req.user._id;
  const userInfo = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    zip: req.body.zip,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
  };
    // /
    // name:req.body.name,
    // username:req.body.username,
    // password:req.body.password,
    // city:req.body.address.city,

  // {
  //     street: city: state:
  // }


  // /
  User.findByIdAndUpdate(userId, {
    name: userInfo.name,
    username: userInfo.username,
    password: userInfo.password,
    // address: userInfo.address,
    address: { city: userInfo.city, street: userInfo.street,state: userInfo.state },
     
  }, (err, theUser) => {
    if (err) {
      next(err);
      return;
    }


    req.user = theUser;
    res.redirect('/dashboard');
  });
});

module.exports = editRoute;
