let express = require('express');

let router = express.Router();

/* GET book page. */
router.get('/books', (req, res, next) => {
  res.render('bookgallery');
});
module.exports = router;
