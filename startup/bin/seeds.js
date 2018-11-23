const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kitab').then(() => {
  const Book = require('../models/books');

  const books = [
    {
      title: 'The Hunger Games',
      img: 'http://books.google.com/books/content?id=Yz8Fnw0PlEQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '0439023483',
      author: 'Suzanne Collins',
      publisher: 'Hardcover',
    },
    {
      title: 'Harry Potter',
      img: 'http://books.google.com/books/content?id=ltNNBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '1010101010',
      author: 'J.K. Rowling ',
      publisher: 'Cultura',
    },
    {
      title: 'To Kill a Mockingbird ',
      img: 'http://books.google.com/books/content?id=0NEbHGREK7cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '2020202020',
      author: 'Harper Lee',
      publisher: 'Abc',
    },
    {
      title: 'Pride and Prejudice ',
      img: 'http://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '3030303030',
      author: 'Jane Austen',
      publisher: 'Xpto',
    },
    {
      title: 'Twilight',
      img: 'http://books.google.com/books/content?id=ZfjzX7M8zt0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '4040404040',
      author: 'Stephenie Meyer ',
      publisher: 'Iron',
    },
    {
      title: 'The Book Thief ',
      img: 'http://books.google.com/books/content?id=veGXULZK6UAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '5050505050',
      author: 'Markus Zusak',
      publisher: 'Saraiva',
    },
    {
      title: 'The Chronicles of Narnia',
      img: 'http://books.google.com/books/content?id=D0CsAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '6060606060',
      author: 'C.S. Lewis',
      publisher: 'Explorer',
    },
    {
      title: 'Animal Farm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '7070707070',
      author: 'George Orwell',
      publisher: 'Sicuto',
    },
    {
      title: 'Gone with the Wind',
      img: 'http://books.google.com/books/content?id=HQAIAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '8080808080',
      author: 'Margaret Mitchell',
      publisher: 'Abbas',
    },
    {
      title: 'The Fault in Our Stars',
      img: 'http://books.google.com/books/content?id=WKFqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ISBN: '9090909090',
      author: 'John Green',
      publisher: 'Henrique',
    },
  ];

  Book.create(books, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${books.length} books`);
    mongoose.connection.close();
  });

  console.log('conected');
});
