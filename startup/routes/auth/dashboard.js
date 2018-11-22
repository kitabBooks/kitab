const ensureLogin = require('connect-ensure-login');

const express = require('express');

const authRoutes = express.Router();

authRoutes.get('/dashboard', ensureLogin.ensureLoggedIn({
  baseUrl: '/',
  redirectTo: '/users/signin'
}), (req, res) => {
  res.render('dashboard', {
    user: req.user
  });
});

authRoutes.get('/interest', ensureLogin.ensureLoggedIn({
  baseUrl: '/',
  redirectTo: '/users/signin'
}), (req, res, next) => {
  res.render('interests');
});
authRoutes.post('/interests', (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.user._id;
  const userInfo = {
    interest: ['books added'],
  };
  User.findByIdAndUpdate(userId, userInfo, {
    new: true
  }, (err, theUser) => {
    if (err) {
      next(err);
      return;
    }

    req.session.currentUser = theUser;

    res.redirect('/dashboard');
  });
});







module.exports = authRoutes;