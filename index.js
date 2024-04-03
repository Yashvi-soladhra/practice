let express= require("express");
let mysql=require("mysql");
let path=require("path");
let app=express();
const bcrypt = require('bcrypt');
app.set('view engine', 'ejs')
app.set('views','./views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/public",express.static(path.join(__dirname,"/public")))
app.use("/img" ,express.static(path.join(__dirname,"/img")))
app.use(express.urlencoded({ extended: true }))
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const { Verify } = require("crypto")
const { register } = require("module");

const routes=require("./route/route")
app.use("/",routes)




app.listen(8200);




