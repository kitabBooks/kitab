const express = require('express');
const axios = require('axios');
const Book = require('../models/books');

const CircularJSON = 'circular-json';
const router = express.Router();

/* GET books page. */
router.get('/books/:page', (req, res, next) => {
  // axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBFY6x3Zudnvc2BdtAqpVsRk_lhfVahjnc')
  //   .then((response) => {
  //     console.log(response);
  //     const books = response;
  //     res.render('bookgallery', { books });
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  const page = req.params.page;
  // console.log(page);
  const options = {
    page,
    limit: 6,
  };

  Book.paginate({}, options, (err, x) => {
    console.log(x);
    const books = x.docs;
    const pages = x.totalPages;
    const nextP = x.hasNextPage;
    const prevP = x.hasPrevPage;
    const nextPage = pages > parseInt(options.page, 10) ? parseInt(options.page, 10) + 1 : null;
    const prevPage = parseInt(options.page, 10) > 1 ? parseInt(options.page, 10) - 1 : null;
    console.log(nextPage);
    res.render('bookgallery', {
      books,
      pages,
      nextP,
      prevP,
      nextPage,
      prevPage,
    });
  });
});

module.exports = router;
