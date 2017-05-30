/**
 * Created by xuwei on 2017/5/23.
 */

let connection=require('./connection')

connection.connect();

var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();
