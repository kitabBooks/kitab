const express = require('express');
const Book = require('../models/books');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  Book.paginate({}, { page: 1, limit: 3 }, (err, x) => {
    const books = x.docs;
    res.render('index', { title: 'Kitab', user: req.user, books });
  })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
