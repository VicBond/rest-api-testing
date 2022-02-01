const express = require('express');
const router = express.Router();

let books = [{
  id: 1,
  author: 'John Date',
  title: 'JavaScript go go go'}];
  
router.get('/', (req, res) => {
  res.json(books)
});

module.exports = router;