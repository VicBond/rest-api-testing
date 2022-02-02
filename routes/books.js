const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let books = [{
  id: 1,
  author: 'John Date',
  title: 'JavaScript go go go'
}];

router.get('/', (req, res) => {
  res.json(books)
});

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find(book => book.id === bookId);
  
  if(book){
    return res.json(book);
  }
  return res.status(404).json({ 
    status: `Book with id ${bookId} not found`
  });

});

router.post('/', (req, res) => {
  // console.log(req.body);
  const book = {
      title: req.body.title || 'default title',
      author: req.body.author || 'default author',
      id: uuidv4()
  };
  books.push(book);
  return res.json(book);
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  books.forEach((book) => {
    if(book.id === bookId){
      book.title = req.body.title;
      book.author = req.body.author;
    }
  });

  const newBook = books.find(book => book.id === bookId);
  return res.json(newBook);
});

module.exports = router;