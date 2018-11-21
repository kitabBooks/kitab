const ensureLogin = require('connect-ensure-login');

const express = require('express');

const authRoutes = express.Router();

authRoutes.get('/dashboard', ensureLogin.ensureLoggedIn({ baseUrl: '/', redirectTo: '/users/signin' }), (req, res) => {
  res.render('dashboard', { user: req.user });
});

module.exports = authRoutes;
