/**
 * Created by xuwei on 2017/6/5.
 */
let mongoose = require('mongoose');
let BookSchema = new mongoose.Schema({
    bookName: String,
    price:Number,
    createTime: {type:Date,default:Date.now}
});

mongoose.model('Book', BookSchema);