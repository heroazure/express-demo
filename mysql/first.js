/**
 * Created by xuwei on 2017/5/23.
 */

let connection=require('./connection')

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
