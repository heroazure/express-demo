/**
 * Created by xuwei on 2017/6/5.
 */
var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function() {
    var db = mongoose.connect(config.mongodb);

    require('../models/user');
    require('../models/book');
    return db;
}