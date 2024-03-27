const { request } = require("express");
var md5 = require('md5');
let con = require("../connection");




exports.registrater = async (req, res) => {
  res.render("registration");
}




exports.show = async (req, res) => {


  let { username, phone, email, password, conformpassword } = req.body;


  if (username == "" || phone == "" || email == "") {
    return res.json({ success: false, message: "Fill All Fields" })
  }

  if (password != conformpassword) {
    return res.json({ success: false, message: "Not Match Password" })
  }

  let [results] = await con.query(`select * from users where email ="${email}"`);
  if (results.length != 0) {
    return res.json({ success: false, message: "User Exist Same email" })
  }

  let salt = Math.random().toString(36).substring(2, 6);
  password = password + salt;

  let hashedpassword = md5(password);
  let aid = crypto.randomUUID();
  let array = [username, phone, email, hashedpassword, salt, aid]
  let sql = `insert into users (username,phone,email,password,salt,activatekey) values (?)`


  let [result] = await con.query(sql, [array])
  res.json({ aid, success: true, message: "successfully" })

}

exports.link = async (req, res) => {
  let links = req.params.id;
  let data = ` <div>
  <p>click here to activate your account</p>
  <a href="http://localhost:8100/verify/${links}">http://localhost:8100/verify/${links}</a>
</div>`
  return res.render("activate", { data })
}

exports.verify = async (req, res) => {
  let links = req.params.id;
  let [result] = await con.query(`select * from users where activatekey="${links}"`);

  if (result.length == 0) {
    let data = ` <div>
    <p>invalid activation key</p>
  
    </div>`
    return res.render("activate", { data })
  }

  let def = new Date() - new Date(result[0].createat);

  let min = parseInt((def / (1000 * 60)) % 60)

  if (min > 1) {
    [result] = await con.query(`delete from users where activatekey="${links}"`);
    let data = ` <div>
    <p>activate link is expired</p>
  
    </div>`
    return res.render("activate", { data })

  }
  [result] = await con.query(`update users set isactive=1 where activatekey="${links}"`);
  let data = ` <div>
  <p>your account is acctivated  successfully</p>

  </div>`
  return res.render("activate", { data })
}

exports.log = async (req, res) => {
  return res.render("login")
}

exports.login = async (req, res) => {
  let { password, email } = req.body;

  let sql = `select * from users where email="${email}" and isactive=1`;
  let [result] = await con.query(sql);
  console.log(result);
  if (result.length == 0) {
   
    // console.log("hello i am hear with yashvi");
    return res.json({ success: false, message: "Please Check a Email or Password" })

    }
    

    password += result[0].salt;
    let hashedpassword = result[0].password;
    password = md5(password);


    if (password == hashedpassword) {

      return res.json({ success: true, message: "Login Successfully" })
  }




}

exports.password = async (req, res) => {
  return res.render("forgot")
}

exports.fpassword = async (req, res) => {

  let { email } = req.body;
  let sql = `select * from users where email="${email}" and isactive=1`;
  let [result] = await con.query(sql);

  if (result.length != 0) {
    return res.json({ success: true, email,message:"" })
  } else {
    return res.json({ success: false, message: "Please Check a Email " })
  }
}


exports.setpassword = async (req, res) => {
  let { password, conformpassword, emails } = req.body;
  
  let sql = `select * from users where email="${emails}"`;
  let [result] = await con.query(sql);
  if (password != conformpassword) {
    return res.json({ success: false, message: "Not Match Password" })
  }

  if (result.length == 0) {
    return res.json({ success: false, message: " not updated" })
  }
  password += result[0].salt;
  let haspassword = md5(password);

  sql = `update users  set password=?  where email="${emails}"`;

  [result] = await con.query(sql, [haspassword]);
  return res.json({ success: true, message: "updated successfully" })

}

