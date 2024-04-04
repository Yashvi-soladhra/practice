var mysql = require('mysql2');



var con = mysql.createConnection
({
  host: "localhost",
  user: "root",
  password: "yashvi",
  database:'project1',
  dateStrings:true
  

}).promise();


  console.log("Connected!");

  module.exports=con;