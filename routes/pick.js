// pick.js
const express = require('express');
const router = express.Router();

const imageNames = [
  'C:\Users\S576367\projects\s24wb67bikki\s24wb67bikki/item1.jpg',
  'C:\Users\S576367\projects\s24wb67bikki\s24wb67bikki/item2.jpg',
  'C:\Users\S576367\projects\s24wb67bikki\s24wb67bikki/item3.jpg',
  'C:\Users\S576367\projects\s24wb67bikki\s24wb67bikki/item4.jpg',
  'C:\Users\S576367\projects\s24wb67bikki\s24wb67bikki/item5.jpg'
];
router.get('/', function(req, res) {
    res.render('randomitem', { title: "A random item", imageNames: imageNames });
});

module.exports = router;
