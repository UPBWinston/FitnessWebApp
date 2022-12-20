// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  
  database: 'test'
});

// simple query
connection.query(
  'SELECT * FROM `users`;',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    res.status(200).json(results)
  }
);

}
