/**
 * Created by xuwei on 2017/6/2.
 */

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = require('./connectString')

var updateData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'菜鸟教程'};
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        console.log(result);
        db.close();
    });
});
