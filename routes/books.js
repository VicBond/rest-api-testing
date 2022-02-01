const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{
    id: 1,
    author: 'John Date',
    title: 'JavaScript go go go'
  }])
});

module.exports = router;