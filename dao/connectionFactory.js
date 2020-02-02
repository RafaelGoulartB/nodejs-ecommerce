const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'equantom',
  });
}

module.exports = () => connectionFactory;
