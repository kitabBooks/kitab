let express = require('express');
let router = express.Router();

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;