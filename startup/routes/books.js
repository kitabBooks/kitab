const express = require('express');
const axios = require('axios');
const Book = require('../models/books');

const CircularJSON = ('circular-json');
const router = express.Router();

/* GET books page. */
router.get('/books', (req, res, next) => {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBFY6x3Zudnvc2BdtAqpVsRk_lhfVahjnc')
    .then((response) => {
      console.log(response);
      const books = response;
      res.render('bookgallery', { books });
    }).catch((err) => {
      console.log(err);
    });
  // Book.find()
  //   .then((books) => {
  //     res.render('bookgallery', { books });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});


module.exports = router;
