/**
 * Created by xuwei on 2017/5/15.
 */
var express = require('express');
var index = express.Router();
var user = require('./user')
var user2 = require('./user2')

/* GET users listing. */
index.get('/', function (req, res, next) {
    res.render('user');
});

module.exports= [
    index,user,user2
]