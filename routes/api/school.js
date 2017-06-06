/**
 * Created by xuwei on 2017/6/5.
 */
let express = require('express');
let router = express.Router();
let mongoose=require('mongoose')
let School=mongoose.model('School')

//添加记录
router.post('/school',(req, res, next)=> {
    let body=req.body
    let school=new School({
        schoolName:body.schoolName,
        address:body.address
    })
    school.save((err)=> {
        if(err){
            res.json({msg:'未知异常'})
            return next()
        }
        School.find({},(err, docs)=> {
            if(err){
                res.json({msg:'未知异常'})
                return next()
            }
            res.json(docs)
        })
    })
})

//删除
router.delete('/school',(req,res,next)=>{
    let data=req.body
    if(data.uid){
        School.remove({uid:Number(data.uid)},(err,result)=>{
            if(err){
                console.log('Error:',err)
                res.json({msg:err})
            }else {
                console.log('res:',result)
                res.json({msg:result})
            }
        })
    }else {
        res.json({msg:'缺少uid参数'})
    }
})

module.exports = router