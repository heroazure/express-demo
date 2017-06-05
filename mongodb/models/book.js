/**
 * Created by xuwei on 2017/6/5.
 */
var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    uid: Number,
    bookName: String,
    createTime: Date
});

mongoose.model('Book', BookSchema);