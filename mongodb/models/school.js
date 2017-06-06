/**
 * Created by xuwei on 2017/6/5.
 */
let mongoose = require('mongoose');

let SchoolSchema = new mongoose.Schema({
    schoolName: {type:String},
    address:{type:String},
    createTime: {type:Date,default:Date.now}
});

mongoose.model('School', SchoolSchema);