const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('neuro', {current: 'neuro'});
});

module.exports = router;
