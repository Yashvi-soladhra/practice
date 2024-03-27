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
app.use(express.urlencoded({ extended: true }))

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const {functions} = require("./controller/attendance/attendancecontroller");
const{textacteo}=require("./controller/textactoe")
const{events}=require("./controller/events")
const {kuku} = require("./controller/kuku");
const {pagination} = require("./controller/pagination_asc_dec/paginationcontroller");
const { search,dynamicfunction } = require("./controller/dynamic/dynamiccontroller");
const {orderfilter} = require("./controller/page_orderby_filter/orderfiltercontroller");
const {resultfunction,resultitemfunction} = require("./controller/result/resultcontroller");
const { searchform, searchcombo, searchs, updateform,results} = require("./controller/job-insert-update/indexController")
const { Verify } = require("crypto")
const { register } = require("module");


//attendance
app.get("/attendance/page",functions)
//dynamic table c
app.get("/dynamic",dynamicfunction)
app.get("/page",search )
app.post("/page",search )

//kuku-cube c
app.get("/kuku" ,kuku)

//tex-tac-toe c

app.get("/textacteo",textacteo)

//events c

app.get("/events",events)

//pagination_asc_dec

app.get("/pagination_asc_dec/pages", pagination)

//result
app.get("/result/page", resultfunction)
app.get("/result/item/:id", resultitemfunction)

//page_orderby_filter
app.get("/pagefilter/page",orderfilter )


//job-insert-update
app.get("/",searchform)

app.post("/",searchcombo)

app.get("/update/:id",searchs)

app.post("/update",updateform)

app.get("/table",results)





app.listen(8100);




