
// const express = require('express');
// const Picture = require('../models/picture')
// const router = express.Router();
// const uploadCloud = require('../config/cloudinary.js');
// router.get('/', (req, res, next) => {
//   Picture.find()
//   .then((picture) => {
//     res.render('', { picture });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });

// router.get('/booksgallery', (req, res, next) => {
//   res.render('bookgallery');
// });
// router.post('/booksgallery', uploadCloud.single('photo'), (req, res, next) => {
//     res.send(req.body)
//     const { title, description } = req.body;
//     const imgPath = req.file.url;
//     const imgName = req.file.originalname;
//     const newpic = new Picture ({ title, description, imgPath, imgName})
//     newpic.save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   });
  

// module.exports = router;