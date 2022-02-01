const express = require('express');
const router = express.Router();

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
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;