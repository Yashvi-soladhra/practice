var mysql = require('mysql2');



var con = mysql.createConnection
({
  host: "localhost",
  user: "root",
  password: "yashvi",
  database:'stud1'

}).promise();


  console.log("Connected!");

  module.exports=con;