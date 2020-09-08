//host: 'localhost',
//user: 'root',
//database: 'node-agenda',
//password: ''

const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-agenda',
    password: ''
});

module.exports = pool;