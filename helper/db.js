const mysql = require('mysql2');

module.exports = () => {

  global.connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  connection.connect((err) => {
    if (err) throw err;

    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
  });

  mysql.Promise = global.Promise;
}