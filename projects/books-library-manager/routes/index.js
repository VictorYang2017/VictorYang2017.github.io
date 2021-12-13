const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  // When home route is hit, it redirect to '/books' route
  res.redirect('/books');
});

/* GET about page */
router.get('/about',async (req, res) => {
  /* Render the about page */
  res.render('about');
});

module.exports = router;
