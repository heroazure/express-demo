/**
 * Created by xuwei on 2017/5/15.
 */
let express = require('express');
let index = express.Router();
let user = require('./user')
let school = require('./school')
let book = require('./book')

/* GET users listing. */
index.get('/', function (req, res, next) {
    res.render('user');
});

module.exports= [
    index,user,school,book
]