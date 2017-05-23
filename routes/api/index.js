/**
 * Created by xuwei on 2017/5/15.
 */
var express = require('express');
var index = express.Router();
var user = require('./user')

/* GET users listing. */
index.get('/', function (req, res, next) {
    res.render('user');
    res.sendFile('')
});

module.exports= [
    index,user
]