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
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const {functions} = require("./controller/attendance/attendancecontroller");
const {show,link,verify,login,log,registrater,password,fpassword,setpassword,logout} = require("./controller/reg/indexcontroller");
const {textacteo}=require("./controller/textactoe")
const {events}=require("./controller/events")
const {kuku} = require("./controller/kuku");
const {pagination} = require("./controller/pagination_asc_dec/paginationcontroller");
const { search,dynamicfunction } = require("./controller/dynamic/dynamiccontroller");
const {orderfilter} = require("./controller/page_orderby_filter/orderfiltercontroller");
const {resultfunction,resultitemfunction} = require("./controller/result/resultcontroller");
const {spchar,spsearch}=require("./controller/search_with_sp_char/searchcontroller");
const {bubblesort}=require("./controller/bubble_sort/bubble_sort")
const {dashboard}=require("./controller/dashboard/dashboardcontroller")
const {auth}=require("./middleware/auth")
const { searchform, searchcombo, searchs, updateform,results} = require("./controller/job-insert-update/indexController")
const { searchformm, searchcomboo, searches, updateformm,resultss,showw} = require("./controller/job-next-prev/indexController")

const { Verify } = require("crypto")
const { register } = require("module");


//register
app.get("/show", registrater )

app.post("/y", show)

app.get("/link/:id",link)

app.get("/verify/:id",verify)

app.get("/log",log)

app.post("/login",login)

app.get("/dashboard",auth,dashboard)

app.get("/forgot",password)

app.post("/fpassword",fpassword)

app.post("/setpassword",setpassword)


app.get("/logout",logout)

// attendance
app.get("/attendance/page",auth,functions)

// dynamic table 
app.get("/dynamic",auth,dynamicfunction)
app.get("/page",auth,search )
app.post("/page",auth,search )

// kuku-cube 
app.get("/kuku" ,auth,kuku)

//tex-tac-toe 

app.get("/textacteo",auth,textacteo)

//events 

app.get("/events",auth,events)

// pagination_asc_dec

app.get("/pagination_asc_dec/pages",auth, pagination)

// result 
app.get("/result/page",auth,resultfunction)
app.get("/result/item/:id",auth,resultitemfunction)

// page_orderby_filter
app.get("/pagefilter/page",auth,orderfilter )


// job-insert-update
app.get("/job",auth,searchform)

app.post("/job",auth,searchcombo)

app.get("/update/:id",auth,searchs)

app.post("/update",auth,updateform)

app.get("/table",auth,results)

// search with special_char
app.get("/shchar",auth,spchar);

app.post("/spsearch",auth,spsearch);

//  sort
app.get("/bubblesort",auth,bubblesort)

//next-prev

app.get("/",auth,searchformm)

app.post("/",auth,searchcomboo)

app.get("/updatee/:id",auth,searchformm)

app.post("/updatee",auth,updateformm)

app.get("/tablee",auth,resultss)

app.get("/u/updatee/:id",auth,showw)



app.listen(8200);




