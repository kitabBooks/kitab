const express = require('express');
const Book = require ('../models/books');

const router = express.Router();

/* GET books page. */
router.get('/books', (req, res, next) => {
  Book.find()
    .then((books) => {
      res.render('bookgallery', { books, user: req.user });
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
