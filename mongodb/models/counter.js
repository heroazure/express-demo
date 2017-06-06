/**
 * Created by xuwei on 2017/6/5.
 * 做id的自增长用
 */
let mongoose = require('mongoose');

let CounterSchema = new mongoose.Schema({
    _id:{type:String},
    sequence_value:{type:Number}
});

mongoose.model('Counter', CounterSchema);