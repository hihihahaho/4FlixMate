module.exports = function () {
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'ubuntu',
        password: '1234qwer',
        database: '4filx'
    });
    conn.connect();

    return conn;
}