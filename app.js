var mysql = require("mysql");
var connection=mysql.createConnection({
    host:'localhost',
    user:'dhvani_sheth',
    database:'join_us'
});

var q='SELECT COUNT(*) AS "count" FROM users';

connection.query(q,(error,results,fields)=>{
    if(error)
        throw error;
    console.log('the total number of users are : '+results[0].count);
});

