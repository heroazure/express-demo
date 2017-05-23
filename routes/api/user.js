/**
 * Created by xuwei on 2017/5/15.
 */
var express = require('express');
let path = require('path')
var router = express.Router();
var fs = require('fs')
var util=require('util')
var url=require('url')
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'hero'
});

connection.connect();

router.get('/user', function (req, res, next) {
    /*fs.readFile(path.join(__dirname, '../../data/user.json'), 'utf8', function (err, data) {
        res.end(data)
    });*/
    // res.end(util.inspect(url.parse(req.url, true)))
    var params=url.parse(req.url, true).query
    /*res.write('name:'+params.name)
    res.write('\n')
    res.write('phone:'+params.phone)*/
    var obj={
        name:params.name,
        phone:params.phone
    }
    res.json(obj)
});

router.get('/user/:id', function (req, res, next) {
    fs.readFile(path.join(__dirname, '../../data/user.json'), 'utf8', function (err, data) {
        data=JSON.parse(data)
        var id = req.params.id
        var user = data['user' + id]
        res.end(user.name)
    });
})
router.post('/user', function (req, res, next) {
    var  addSql = 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    var body=req.body
    var  addSqlParams = [body.name, body.url,body.alexa, body.country];
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });
    connection.end();

    res.json({id:addSqlParams})
})

// export default router
module.exports = router