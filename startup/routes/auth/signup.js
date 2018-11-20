const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../../models/users');

const bcryptSalt = 10;
const router = express.Router();

router.get('/signup', (req, res, next) => {
  console.log('in get');
  res.render('signup', {
    message: '',
  });
});
router.post('/signup', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;
  const state = req.body.state;
  const city = req.body.city;
  const zip = req.body.zip;

  if (email === '' || password === '') {
    res.render('signup', {
      message: 'Enter both email and password to sign up.',
    });
    return;
  }
  User.findOne({ email }, '_id', (err, existingUser) => {
    if (err) {
      next(err);
      return;
    }
    if (existingUser !== null) {
      res.render('signup', {
        message: `The email ${email} is already in use.`,
      });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(password, salt);
    const userSubmission = {
      name,
      username,
      password: hashedPass,
      email,
      address: {
        zip,
        street: address,
        city,
        state,
      },
    };
    const theUser = new User(userSubmission);
    theUser.save((err) => {
      if (err) {
        res.render('signup', {
          message: 'Something went wrong. Try again later.',
        });
        return;
      }

      res.redirect('/');
    }); // saved new user user
  });// findOne
});// form post function

module.exports = router;
