/**
 * Created by xuwei on 2017/5/23.
 */

let connection=require('./connection')

connection.connect();

let delSql = 'DELETE FROM websites where id=6';
//删
connection.query(delSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
