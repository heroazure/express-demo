/**
 * Created by xuwei on 2017/6/5.
 */
let express = require('express');
let router = express.Router();
let mongoose=require('mongoose')
let Book=mongoose.model('Book')

router.post('/book',(req, res, next)=> {
    let body=req.body
    let book=new Book({
        bookName:body.bookName,
        price:body.price
    })
    book.save((err)=> {
        if(err){
            res.json({msg:'未知异常'})
            return next()
        }
        Book.find({},(err, docs)=> {
            if(err){
                res.json({msg:'未知异常'})
                return next()
            }
            res.json(docs)
        })
    })
})

module.exports = router