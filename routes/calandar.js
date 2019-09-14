const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/calandar', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
