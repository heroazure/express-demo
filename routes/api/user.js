/**
 * Created by xuwei on 2017/5/15.
 */
var express = require('express');
let path = require('path')
var router = express.Router();
var fs = require('fs')
var util=require('util')
var url=require('url')

router.get('/user', function (req, res, next) {
    /*fs.readFile(path.join(__dirname, '../../data/user.json'), 'utf8', function (err, data) {
        res.end(data)
    });*/
    // res.end(util.inspect(url.parse(req.url, true)))
    var params=url.parse(req.url, true).query
    /*res.write('name:'+params.name)
    res.write('\n')
    res.write('phone:'+params.phone)*/
    var obj={
        name:params.name,
        phone:params.phone
    }
    res.json(obj)
});

router.get('/user/:id', function (req, res, next) {
    fs.readFile(path.join(__dirname, '../../data/user.json'), 'utf8', function (err, data) {
        data=JSON.parse(data)
        var id = req.params.id
        var user = data['user' + id]
        res.end(user.name)
    });
})
router.post('/user2/test', function (req, res, next) {
    res.end(util.inspect(req.body))
})

// export default router
module.exports = router