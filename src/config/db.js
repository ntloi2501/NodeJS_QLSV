//connect db
const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: '',
//     database: process.env.DB_NAME,
//   });
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
  });
  // connection.query(
  //   'SELECT * FROM `grades` WHERE courseId = "MATH101" ',
  //   function (error, results, fields) {
  //   if (error) throw error;
  //     console.log('>>>results' , results); // results contains rows returned by server
  //     console.log('>>>fields' , fields); // fields contains extra meta data about results, if available
  //   }
  // );
  module.exports = connection