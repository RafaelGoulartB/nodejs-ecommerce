const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'equantom',
  });
}

module.exports = () => connectionFactory;
