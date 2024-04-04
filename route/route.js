let express=require("express");


const {functions} = require("../controller/attendance/attendancecontroller");
const {show,link,verify,login,log,registrater,password,fpassword,setpassword,logout} = require("../controller/reg/indexcontroller");
const {textacteo}=require("../controller/tectactoe/textactoe")
const {events}=require("../controller/events/events")
const {kuku} = require("../controller/kuku/kuku");
const {pagination} = require("../controller/pagination_asc_dec/paginationcontroller");
const { search,dynamicfunction } = require("../controller/dynamic/dynamiccontroller");
const {orderfilter} = require("../controller/page_orderby_filter/orderfiltercontroller");
const {resultfunction,resultitemfunction} = require("../controller/result/resultcontroller");
const {spchar,spsearch}=require("../controller/search_with_sp_char/searchcontroller");
const {bubblesort}=require("../controller/bubble_sort/bubble_sort")
const {dashboard}=require("../controller/dashboard/dashboardcontroller")
const {auth}=require("../middleware/auth")
const { searchform, searchcombo, searchs, updateform,results} = require("../controller/job_insert_update/indexController")
const { searchformm, searchcomboo, searches, updateformm,resultss,showw} = require("../controller/job_next_prev/indexController")
const {html1}=require("../controller/htmll/html")
const {html2}=require("../controller/html2/html2")



let router=express.Router();

//reg

router.route("/show")
.get(registrater)

router.route("/y")
.post(show)

router.route("/link/:id")
.get(link)

router.route("/verify/:id")
.get(verify)

router.route("/log")
.get(log)

router.route("/login")
.post(login)

router.route("/dashboard")
.get(auth,dashboard)

router.route("/forgot")
.get(password)

router.route("/fpassword")
.post(fpassword)

router.route("/setpassword")
.post(setpassword)

router.route("/logout")
.get(logout)


// // attendance

router.route("/attendance/page")
.get(functions)


// dynamic table 

router.route("/dynamic")
.get(auth,dynamicfunction)

router.route("/page")
.get(auth,search)
.post(auth,search)


// kuku-cube 

router.route("/kuku")
.get(auth,kuku)


//tex-tac-toe 
router.route("/textacteo")
.get(auth,textacteo)

//events 
router.route("/events")
.get(auth,events)


 // pagination_asc_dec
router.route("/pagination_asc_dec/pages")
.get(auth, pagination)

// result 
router.route("/result/page")
.get(auth,resultfunction)

router.route("/result/item/:id")
.get(auth,resultitemfunction)



// page_orderby_filter
router.route("/pagefilter/page")
.get(auth,orderfilter)


// job-insert-update

router.route("/job")
.get(auth,searchform)

router.route("/job")
.post(auth,searchcombo)


router.route("/update/:id")
.get(auth,searchs)

router.route("/update")
.post(auth,updateform)


router.route("/table")
.get(auth,results)

// search with special_char
router.route("/shchar")
.get(auth,spchar)

router.route("/spsearch")
.post(auth,spsearch)


//  sort

router.route("/bubblesort")
.get(auth,bubblesort)


//next-prev

router.route("/updatee/:id")
.get(auth,searchformm)

router.route("/updatee")
.post(auth,updateformm)

router.route("/tablee")
.get(auth,resultss)

router.route("/u/updatee/:id")
.get(auth,showw)

router.route("/")
.get(auth,searchformm)
.post(auth,searchcomboo)


//html_task
router.route("/html1")
.get(html1)

router.route("/html2")
.get(html2)




module.exports=router