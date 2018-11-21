let express = require('express');
const ensureLogin = require('connect-ensure-login');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Kitab', user: req.user });
});
//  router.get('/signup',function(req, res, next) {
//   res.send('hkjkhlhk');
// })
module.exports = router;
