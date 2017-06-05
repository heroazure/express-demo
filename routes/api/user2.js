/**
 * Created by xuwei on 2017/6/5.
 */
var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var User=mongoose.model('User')

router.post('/user2',function (req, res, next) {
    var user=new User({
        uid:'1',
        username:'heroxiao'
    })
    user.save(function (err) {
        if(err){
            res.end('error')
            return next()
        }
        User.find({$or:[{uid:'1'},{username:'heroxiao'}]},function (err, docs) {
            if(err){
                res.end('error')
                return next()
            }
            res.json(docs)
        })
    })
})

module.exports = router