var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notfund', function(req, res, next) {
    res.render('notfund',{title:'没有发现'});
});

module.exports = router;
