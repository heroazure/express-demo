var express = require('express');
var router = express.Router();

router.get('/mobile', function(req, res, next) {
  res.render('mobile-chat');
});
router.get('/pc', function(req, res, next) {
    res.render('pc-chat');
});

module.exports = router;
