var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notfund', function(req, res, next) {
    res.render('notfund');
});

module.exports = router;
