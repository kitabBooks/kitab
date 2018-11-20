const express = require('express');
const Book = require ('../models/books');

const router = express.Router();

/* GET book page. */
router.get('/books', (req, res, next) => {
  Book.find()
    .then((books) => {
      res.render('bookgallery', { books });
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
