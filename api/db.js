const mysql = require('mysql2');
const pool = mysql.createPool({
    host: '192.168.1.226',
    port: 3306,
    user: 'user',
    password: 'password',
    database: 'hack218',
    connectionLimit: 10,
});

module.exports = pool.promise();