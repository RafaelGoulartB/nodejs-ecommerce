const mysql = require('mysql');

function createDbConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'equantom',
  });
}

module.exports = () => createDbConnection;
