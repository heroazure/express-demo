/**
 * Created by xuwei on 2017/6/5.
 */
let express = require('express');
let router = express.Router();
let mongoose=require('mongoose')
let Book=mongoose.model('Book')
let url=require('url')

router.get('/book',(req, res, next)=>{
    let query=url.parse(req.url,true).query
    let option={}
    if(query&&query.bookName){
        option.bookName=new RegExp(query.bookName,'i')
    }
    Book.find(option,(err,result)=>{
        if(err){
            res.json(
                {
                    status:{retCode:-1,msg:'未知异常'}
                }
            )
            return next()
        }
        res.json({
            status:{retCode:0,msg:'成功'},
            data:result
        })
    })
})

router.post('/book',(req, res, next)=> {
    let body=req.body
    let book=new Book({
        bookName:body.bookName,
        price:body.price
    })
    book.save((err,result)=> {
        if(err){
            res.json(
                {
                    status:{retCode:-1,msg:'未知异常'}
                }
            )
            return next()
        }
        res.json({
            status:{retCode:0,msg:'成功'},
            data:result
        })
        /*Book.find({},(err, docs)=> {
            if(err){
                res.json({
                    status:{retCode:-1,msg:'未知异常'}
                })
                return next()
            }
            res.json({
                status:{retCode:0,msg:'成功'},
                data:docs
            })
        })*/
    })
})

module.exports = router