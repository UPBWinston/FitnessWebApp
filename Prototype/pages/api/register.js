export default function handler(req, res) {

    console.log("login api page called...");
   
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
    const address = req.body.password;
    const telephone = req.body.password;
    const email = req.body.email;

  
    console.log("username is: "+ username);
    console.log("password  is: "+ pass);
    console.log("address is" + address);
    console.log("telephone number is" + telephone);
    console.log("e-mail address is" + email);
  
  
    // db
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'test'
    });
  
  
    // simple query
  connection.query(
    //"SELECT * FROM users WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",
    "INSERT INTO `test`.`register` (`username`) VALUES ('a');",
    function(err, results, fields) {
   
     
  
      
      
        res.status(200).json("ok");
  
      
     
    }
  );
  
  
  
  
  
  
  
      
      
  }