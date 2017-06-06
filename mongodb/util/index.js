/**
 * Created by xuwei on 2017/6/6.
 */
let mongoose=require('mongoose')
let Counter=mongoose.model('Counter')
//自增1
//错了，是异步调用，以后再改
exports.getNextSequenceValue=(sequenceName)=>{
    let count=Counter.count({_id:sequenceName})
    if(count){
        let query=Counter.findOneAndUpdate({_id:sequenceName},{$inc:{sequence_value:1}})
        console.log('sequence_value:',query.sequence_value)
        return query.sequence_value
    }else {
        let counter=new Counter({
            _id:sequenceName,
            sequence_value:0
        })
        counter.save()
        return 0
    }
}