const ensureLogin = require('connect-ensure-login');
const express = require('express');

const authRoutes = express.Router();
const User = require('../../models/users');
const Book = require('../../models/books');

authRoutes.get(
  '/dashboard',
  ensureLogin.ensureLoggedIn({
    baseUrl: '/',
    redirectTo: '/users/signin',
  }),
  (req, res) => {
    res.render('dashboard', {
      user: req.user,
    });
  },
);

authRoutes.get(
  '/interests/',
  ensureLogin.ensureLoggedIn({
    baseUrl: '/',
    redirectTo: '/users/signin',
  }),
  (req, res, next) => {
    const userId = req.user._id;
    const page = req.query.page || 1;
    User.findById(userId).then((user) => {
      const interestBooks = user.interest;
      console.log(interestBooks);
      Book.paginate({ _id: interestBooks }, { page, limit: 3 }).then((x) => {
        const books = x.docs;
        const pages = x.totalPages;
        const nextPage =          pages > parseInt(page, 10) ? parseInt(page, 10) + 1 : null;
        const prevPage = parseInt(page, 10) > 1 ? parseInt(page, 10) - 1 : null;
        const queryStringNext = `?page=${nextPage}`;
        const queryStringPrev = `?page=${nextPage}`;
        res.render('interests', {
          user: req.user,
          books,
          nextPage,
          prevPage,
          queryStringNext,
          queryStringPrev,
        });
      });
    });
  },
);
authRoutes.post('/interests/:id', (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  console.log(req.user);
  console.log(req.params.id);
  let userId;
  if (req.user !== undefined) {
    userId = req.user._id;
    const bookId = req.params.id;
    const userInfo = {
      interest: bookId,
    };
    User.findByIdAndUpdate(
      userId,
      { $push: userInfo },
      {
        new: true,
      },
      (err, theUser) => {
        if (err) {
          next(err);
          return;
        }

        req.session.currentUser = theUser;

        res.redirect('/interests');
      },
    );
  } else res.redirect('/signup');
});

module.exports = authRoutes;
