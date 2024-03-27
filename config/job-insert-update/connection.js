// let mysql = require("mysql2")

// let conn=mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "yashvi",
//     database: "job_29",
//     dateStrings:true
// }).promise()

//     console.log("connected");
    


// module.exports=conn;

let mysql = require("mysql2")

let conn=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yashvi",
  database:'job_29',
  dateStrings:true,
}).promise()

    console.log("connected");
    


module.exports=conn;