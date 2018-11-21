const express = require('express');
const User = require('../../models/users');
const editRoute = express.Router();
const passport = require('passport');

router.get('/dashboard', (req, res, next) => {
    res.render('userprofile');
  });
  router.post('/profileEdit', (req, res, next) => {
    const userId = req.session.currentUser._id;
    const userInfo = {
      name: req.body.name,
      password: password,
      address:address,
      city:city,
      state:state
    };
  
    User.findByIdAndUpdate(userId, { new: true }, (err, theUser) => {
      if (err) {
        next(err);
        return;
      }
  
      req.session.currentUser = theUser;
  
      res.redirect('/dashboard');
    });
  });
  
  module.exports = router;