/**
 * Created by xuwei on 2017/6/5.
 */
let mongoose = require('mongoose')
let config = require('./config')

module.exports = function() {
    let db = mongoose.connect(config.mongodb)
    let conn=mongoose.connection
    conn.on('connected',()=>{
        console.log(`成功连接到：${config.mongodb}`)
    })
    conn.on('error',()=>{
        console.log('连接异常...')
    })
    conn.on('disconnected',()=>{
        console.log('连接断开...')
    })
    require('../models/school')
    require('../models/book')
    return db
}