const express = require('express');
const axios = require('axios');
const Book = require('../models/books');

const CircularJSON = ('circular-json');
const router = express.Router();

/* GET books page. */
router.get('/books', (req, res, next) => {
  // axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBFY6x3Zudnvc2BdtAqpVsRk_lhfVahjnc')
  //   .then((response) => {
  //     console.log(response);
  //     const books = response;
  //     res.render('bookgallery', { books });
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  Book.paginate({}, { page: 1, limit: 6 }, (err, result) => result)
    .then((x) => {
      console.log(x);
      const books = x.docs;
      const pages = x.totalPages;
      const nextP = x.hasNextPage;
      const prevP = x.hasPrevPage;
      res.render('bookgallery', {
        books,
        pages,
        nextP,
        prevP,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
