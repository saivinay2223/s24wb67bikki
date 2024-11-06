// grid.js
const express = require('express');
const router = express.Router();

router.get('/gridbuild', (req, res) => {
  let query = req.query;
  console.log(`Rows: ${query.rows}`);
  console.log(`Cols: ${query.cols}`);
  
  res.render('grid', {
    title: "Grid Display",
    query: query
  });
});

module.exports = router;
