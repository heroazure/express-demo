/**
 * Created by xuwei on 2017/5/30.
 */
let mysql=require('mysql')

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'hero',
});

module.exports=connection